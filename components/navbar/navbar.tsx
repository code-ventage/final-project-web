'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import UserMenuLogged from '@/components/navbar/user-menu-logged'
import UserMenuNotLogged from '@/components/navbar/user-menu-not-logged'
import AuthContext from '@/context/auth-context'
import { BookAIcon, EllipsisVertical, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useContext } from 'react'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
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
        <ModeToggle />

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
            {/* UserMenu renders a PopoverContent when is logged in */}
            <UserMenuLogged />
          </Popover>
        ) : (
          <>
            <div className="hidden md:flex md:items-center md:gap-x-2">
              <Link
                href={{ pathname: '/register', query: { redirect: '/' } }}
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'order-1 md:border',
                })}
              >
                Crear cuenta
              </Link>

              <Link
                href={{
                  pathname: '/login',
                  query: { redirect: '/' },
                }}
                className={buttonVariants({
                  className: 'order-3 md:border',
                })}
              >
                Iniciar sesión
              </Link>
            </div>
            {/* UserMenu renders a PopoverContent when is not logged in */}
            <div className="order-3 inline-block md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-dark order-3 rounded-full"
                  >
                    <MenuIcon className="size-6" />
                  </Button>
                </PopoverTrigger>
                <UserMenuNotLogged />
              </Popover>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
