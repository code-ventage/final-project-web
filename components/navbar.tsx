import Link from "next/link";
import { useContext } from "react";
import { useTheme } from "next-themes";
import AuthContext from '@/context/auth-context'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MoonIcon, SunIcon, BookAIcon, EllipsisVertical, LogInIcon } from "lucide-react";
import UserMenu from '@/components/user-menu'
import { Button } from '@/components/ui/button'

export default function Navbar() {

    const { theme, setTheme } = useTheme();
    const { user } = useContext(AuthContext);

    return (
        <header className="w-full flex items-center justify-between dark:bg-[#09090b] py-2 px-3 border-b shadow-sm">
            <a href="/">
                <span className="flex items-center gap-x-2 font-semibold text-xl md:text-3xl text-dark dark:text-white">
                    <BookAIcon className="size-6" />
                    Traductor
                </span>
            </a>
            <nav className="flex items-center">
                <Button
                    className="rounded-full text-dark dark:text-white"
                    size="icon"
                    variant="ghost"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {
                        theme === 'dark'
                            ? <SunIcon className="size-6" />
                            : <MoonIcon className="size-6" />
                    }
                </Button>
                {user ? (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full text-dark dark:text-white"
                            >
                                <EllipsisVertical className="size-6" />
                            </Button>
                        </PopoverTrigger>
                        { /* UserMenu renders as PopoverContent */}
                        <UserMenu />
                    </Popover>) : (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                    asChild
                                >
                                    <Link href="/login">
                                        <LogInIcon className="size-6" />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="dark:bg-[#09090b]">
                                <span>Inicia Sesión</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </nav>
        </header >
    );
}
