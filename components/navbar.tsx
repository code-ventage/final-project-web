'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import UserMenu from '@/components/user-menu'
import AuthContext from '@/context/auth-context'
import { BookAIcon, EllipsisVertical, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { user } = useContext(AuthContext)
  const pathname = usePathname()

  return (
    <header className="flex w-full items-center justify-between border-b px-3 py-2 shadow-sm dark:bg-[#09090b]">
      <Link href="/">
        <span className="text-dark flex items-center gap-x-2 text-xl font-semibold dark:text-white md:text-2xl">
          <BookAIcon className="size-6" />
          Traductor
        </span>
      </Link>
      <nav className="flex items-center gap-x-1">
        <Button
          className="text-dark rounded-full dark:text-white"
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
                className="text-dark rounded-full dark:text-white"
              >
                <EllipsisVertical className="size-6" />
              </Button>
            </PopoverTrigger>
            {/* UserMenu renders a PopoverContent */}
            <UserMenu />
          </Popover>
        ) : (
          <Button variant="ghost" size="sm" className="border" asChild>
            <Link
              href={{
                pathname: '/login',
                query: { redirect: pathname },
              }}
            >
              Inicia sesión
            </Link>
          </Button>
        )}
      </nav>
    </header>
  )
}
