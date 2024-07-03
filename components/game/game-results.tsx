import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import AuthContext from '@/context/auth-context'
import { useContext, useEffect, useState } from 'react'
import { saveUserScore } from '@/services/scores'

export default function GameResults({
  setGameStatus,
  score,
}: {
  setGameStatus: React.Dispatch<React.SetStateAction<number>>
  score: number
}) {
  const { user } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const save = async () => {
      // Solo para que typescript no se queje, en este scope el user ya existe
      if (!user) return
      setIsLoading(true)
      const response = await saveUserScore(score, user.username)
      setIsLoading(false)
    }
    save()
  }, [])

  if (isLoading) {
    return (
      <section className="flex w-full items-center justify-center">
        <Loader2 className="animate-spin" />
      </section>
    )
  }

  return (
    <section className="flex w-full flex-col items-center gap-y-3">
      <h1 className="text-5xl font-extrabold">Puntuación</h1>
      <h2 className="text-3xl">
        <span className="font-bold">{score}</span> <span>pts</span>
      </h2>
      <div className="flex w-full max-w-[300px] gap-x-2">
        <Button className="flex-1" onClick={() => setGameStatus(1)}>
          Volver a jugar
        </Button>
        <Link
          className={buttonVariants({
            variant: 'ghost',
            className: 'flex-1 border',
          })}
          href="/"
        >
          Salir
        </Link>
      </div>
    </section>
  )
}
