import { BookAIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export default function SignUpNavbar() {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between border-b px-3 py-2 shadow-sm">
      <Link href="/">
        <BookAIcon className="size-6" />
      </Link>

      <Button className="border" variant="ghost" size="sm" asChild>
        <Link href={{ pathname: '/login', query: { redirect: '/register' } }}>
          Iniciar sesión
        </Link>
      </Button>
    </header>
  )
}
