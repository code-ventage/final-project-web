'use client'

import { useContext, useEffect, useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import AuthContext from '@/context/auth-context'
import { Score, GenericResponse, getUserScores } from '@/services/scores'
import ScoresTable from '@/components/scores-table'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Scores() {
  const { user } = useContext(AuthContext)
  const [scores, setScores] = useState<Score[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchScores = async () => {
      const scores = (await getUserScores()) as GenericResponse
      setScores(scores.response.data)
    }

    if (!user) return
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
        <p className="mt-4 px-4">
          <Link className="text-blue-600" href="/login">
            Inicia sesión
          </Link>{' '}
          para poder ver la puntuación de otros usuarios.
        </p>
      </>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Navbar />
      <main className="w-full px-4">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
            <SearchIcon className="size-5" />
          </div>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1"
            placeholder="Buscar usuarios"
          />
        </div>

        <ScoresTable scores={filteredScores} />
      </main>

      <Footer />
    </div>
  )
}
