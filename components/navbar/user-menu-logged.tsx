import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { PopoverContent } from '@/components/ui/popover'
import { BoltIcon, LogOutIcon } from 'lucide-react'
import { useContext } from 'react'
import AuthContext from '@/context/auth-context'

export default function UserMenu() {
  const router = useRouter()
  const { setUser } = useContext(AuthContext)
  const { toast } = useToast()

  const logout = () => {
    setUser(null)
    router.push('/login')
    toast({
      title: 'Sesión cerrada correctamente.',
      duration: 3000,
    })
  }

  return (
    <PopoverContent className="flex w-[250px] flex-col gap-y-2">
      <Link
        href="/scores"
        className="flex w-full cursor-pointer items-center justify-between gap-x-2 border-b pb-3"
      >
        Puntuación
        <BoltIcon className="size-6" />
      </Link>
      <span
        onClick={() => logout()}
        className="flex w-full cursor-pointer items-center justify-between gap-x-2 pt-2"
      >
        Cerrar sesión
        <LogOutIcon className="size-6" />
      </span>
    </PopoverContent>
  )
}
