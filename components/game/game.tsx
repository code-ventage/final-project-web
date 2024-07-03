import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Input } from '../ui/input'
import { CheckIcon, CircleXIcon } from 'lucide-react'
import AlertExitDialog from '../exit-dialog'
import { Skeleton } from '../ui/skeleton'
import { useGame } from '@/hooks/useGame'

export default function Game({
  setGameStatus: setGameStatus,
  saveUserScore,
}: {
  setGameStatus: React.Dispatch<React.SetStateAction<number>>
  saveUserScore: React.Dispatch<React.SetStateAction<number>>
}) {
  const { state, setState, onFinishedGame, handleChange } = useGame({
    setGameStatus,
    saveUserScore,
  })

  return (
    <section className="flex w-full flex-col items-center justify-center gap-y-4">
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors={['#228B22', '#d4af37', '#FFAB40', '#FF5252']}
        colorsTime={[60, 10, 5, 0]}
        onUpdate={remainingTime =>
          setState({ ...state, remainingTime: remainingTime })
        }
        onComplete={onFinishedGame}
      >
        {({ remainingTime }) => (
          <span className="text-xl font-bold">{remainingTime}</span>
        )}
      </CountdownCircleTimer>

      {state.generatedNumber ? (
        <h1>{state.generatedNumber}</h1>
      ) : (
        <Skeleton className="h-[20px] w-[100px]" />
      )}

      <div className="relative flex w-full max-w-[350px] flex-col items-center">
        <Input
          type="text"
          disabled={state.isLoadingNumber}
          autoFocus
          className="flex-1 pr-2"
          value={state.userInput}
          onChange={handleChange}
          placeholder="Escribe el numeral aquí"
        />
        <span className="absolute right-2 top-1 overflow-hidden rounded-full">
          {state.typo ? (
            <CircleXIcon className="bg-red-100 p-1 text-red-500" />
          ) : (
            <CheckIcon className="animate-fade-out bg-green-100 p-1 text-green-500" />
          )}
        </span>

        {/* Si quieres salirte del juego */}
        <AlertExitDialog />
      </div>
    </section>
  )
}
