'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import UserMenu from '@/components/user-menu'
import AuthContext from '@/context/auth-context'
import { BookAIcon, EllipsisVertical, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useContext } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { user } = useContext(AuthContext)

  return (
    <header className="flex w-full items-center justify-between border-b px-3 py-2 shadow-sm">
      <Link href="/">
        <span className="text-dark flex items-center gap-x-2 text-xl font-semibold md:text-2xl">
          <BookAIcon className="size-6" />
          Traductor
        </span>
      </Link>
      <nav className="flex items-center gap-x-1">
        <Button
          className="text-dark order-2 rounded-full"
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <SunIcon className="size-6" />
          ) : (
            <MoonIcon className="size-6" />
          )}
        </Button>
        {user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="text-dark order-3 rounded-full"
              >
                <EllipsisVertical className="size-6" />
              </Button>
            </PopoverTrigger>
            {/* UserMenu renders a PopoverContent */}
            <UserMenu />
          </Popover>
        ) : (
          <div className="flex items-center gap-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-dark order-1 border"
            >
              <Link href={{ pathname: '/register', query: { redirect: '/' } }}>
                Crear cuenta
              </Link>
            </Button>

            <Button size="sm" className="order-3 border" asChild>
              <Link
                href={{
                  pathname: '/login',
                  query: { redirect: '/' },
                }}
              >
                Inicia sesión
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
