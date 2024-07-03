'use client'

import Game from '@/components/game/game'
import GameResults from '@/components/game/game-results'
import Countdown from '@/components/game/countdown'
import AuthContext from '@/context/auth-context'
import { useContext, useState } from 'react'
import Info from '@/components/game/info'
import Link from 'next/link'

export default function GamePage() {
  const { user } = useContext(AuthContext)
  const [gameStatus, setGameStatus] = useState(0)
  const [userScore, setUserScore] = useState(0)

  const views = [
    <Info key={'first'} setGameStatus={setGameStatus} />,
    <Countdown key={'second'} setGameStatus={setGameStatus} />,
    <Game
      key={'third'}
      setGameStatus={setGameStatus}
      saveUserScore={setUserScore}
    />,
    <GameResults
      key={'fourth'}
      score={userScore}
      setGameStatus={setGameStatus}
    />,
  ]

  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center">
        <span>
          Debes{' '}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            {' '}
            iniciar sesión{' '}
          </Link>{' '}
          para jugar
        </span>
      </main>
    )
  }
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      {views[gameStatus]}
    </main>
  )
}
