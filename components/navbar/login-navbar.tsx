import Link from 'next/link'
import { BookAIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AuthHeader() {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between border-b px-3 py-2 shadow-sm">
      <Link href="/">
        <BookAIcon className="size-6" />
      </Link>

      <Button className="border" size="sm" variant="ghost" asChild>
        <Link
          href={{ pathname: '/register', query: { redirect: '/login' } }}
          className="font-medium"
        >
          Crear cuenta
        </Link>
      </Button>
    </header>
  )
}
