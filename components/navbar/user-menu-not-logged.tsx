import Link from 'next/link'
import { PopoverContent } from '@/components/ui/popover'
import { LogInIcon, UserPlusIcon } from 'lucide-react'

export default function UserMenu() {
  return (
    <PopoverContent className="flex w-[250px] flex-col gap-y-2">
      <Link
        href="/login"
        className="flex w-full cursor-pointer items-center justify-between gap-x-2 border-b pb-3"
      >
        Iniciar sesión
        <LogInIcon className="size-6" />
      </Link>
      <Link
        href="/register"
        className="flex w-full cursor-pointer items-center justify-between gap-x-2 pt-2"
      >
        Crear cuenta
        <UserPlusIcon className="size-6" />
      </Link>
    </PopoverContent>
  )
}
