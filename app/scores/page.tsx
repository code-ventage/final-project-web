'use client'

import { useContext, useEffect, useState } from 'react'
import { SearchIcon } from 'lucide-react'
import Navbar from '@/components/navbar'
import { Input } from '@/components/ui/input'
import AuthContext from '@/context/auth-context'
import { Score, ScoreResponse, getUserScores } from '@/services/scores'
import ScoresTable from '@/components/scores-table'

export default function Scores() {
  const { user } = useContext(AuthContext)
  const [scores, setScores] = useState<Score[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    if (!user) return

    const fetchScores = async () => {
      const scores = (await getUserScores()) as ScoreResponse
      console.log(scores)
      setScores(scores.response.data)
    }

    fetchScores()
  }, [input, user])

  const filteredScores = scores.filter(({ username, score }) => {
    return (
      username.toLowerCase().trim().includes(input.toLowerCase().trim()) ||
      score.includes(input)
    )
  })

  if (!user) {
    return (
      <>
        <Navbar />
        <p className="mt-5 px-4">
          Para ver la información de otros usuarios debes iniciar sesión.
        </p>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mt-4 flex flex-col items-center justify-center px-4 dark:bg-[#09090b]">
        <div className="mb-5 w-full">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
              <SearchIcon />
            </div>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
              placeholder="Busca otros usuarios"
            />
          </div>
        </div>

        <ScoresTable scores={filteredScores} />
      </main>
    </>
  )
}
