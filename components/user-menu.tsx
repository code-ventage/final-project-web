import { PopoverContent } from '@/components/ui/popover'
import { BoltIcon, LogOutIcon } from 'lucide-react'

export default function UserMenu() {
    return (
        <PopoverContent className="w-[200px] flex flex-col gap-y-2 dark:bg-[#09090b]">
            <span className="w-full flex gap-x-2 items-center justify-between px-2 border-b pb-3">
                <BoltIcon className="size-6" />
                Puntuación
            </span>
            <span className="w-full flex gap-x-2 items-center justify-between px-2 pt-2">
                <LogOutIcon className="size-6" />
                Cerrar sesión
            </span>
        </PopoverContent>
    );
}
