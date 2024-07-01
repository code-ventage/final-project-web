import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { PopoverContent } from '@/components/ui/popover'
import { BoltIcon, LogOutIcon } from 'lucide-react'

export default function UserMenu() {

    const router = useRouter()
    const { toast } = useToast()

    const logout = () => {
        router.push('/auth/login')
        toast({
            title: 'Sesión cerrada correctamente.',
            duration: 3000,
        })

    }

    return (
        <PopoverContent className="w-[200px] flex flex-col gap-y-2 dark:bg-[#09090b]">
            <Link
                href="#"
                className="cursor-pointer w-full flex gap-x-2 items-center justify-between border-b pb-3"
            >
                Puntuación
                <BoltIcon className="size-6" />

            </Link>
            <span
                onClick={() => logout()}
                className="cursor-pointer w-full flex gap-x-2 items-center justify-between pt-2"
            >
                Cerrar sesión
                <LogOutIcon className="size-6" />
            </span>
        </PopoverContent>
    );
}
