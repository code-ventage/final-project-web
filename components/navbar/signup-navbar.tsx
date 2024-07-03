import Link from 'next/link'
import { BookAIcon } from 'lucide-react'
import { buttonVariants } from '../ui/button'

export default function SignUpNavbar() {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between border-b px-3 py-2 shadow-sm">
      <Link href="/">
        <BookAIcon className="size-6" />
      </Link>

      <Link
        href={{ pathname: '/login', query: { redirect: '/register' } }}
        className={buttonVariants({
          variant: 'ghost',
          size: 'sm',
          className: 'border',
        })}
      >
        Iniciar sesión
      </Link>
    </header>
  )
}
