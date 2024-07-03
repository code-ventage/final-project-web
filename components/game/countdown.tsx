import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function Countdown({
  setGameStatus,
}: {
  setGameStatus: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={3}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[3, 2, 1, 0]}
      onComplete={() => setGameStatus(2)}
    >
      {({ remainingTime }) => (
        <span className="text-xl font-bold">{remainingTime}</span>
      )}
    </CountdownCircleTimer>
  )
}

export default Countdown