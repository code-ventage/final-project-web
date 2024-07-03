import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'

export default function GameInfo({
  setGameStatus,
}: {
  setGameStatus: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <section className="flex w-full max-w-[520px] flex-col items-center space-y-3 max-md:px-8">
      <span className="font-semibold md:text-xl">Contrarreloj Numérico</span>
      <p className="w-full text-center">
        ¡Prepárate para un desafío mental en &quot;Contrarreloj Numérico&quot;
        tienes que escribir números rápidamente antes de que el tiempo se agote.{' '}
      </p>

      <Button className="w-full font-medium" onClick={() => setGameStatus(1)}>
        ¡Empezar!
      </Button>

      <Link
        className={buttonVariants({
          variant: 'ghost',
          className: 'w-full',
        })}
        href="/"
      >
        Salir
      </Link>
    </section>
  )
}
