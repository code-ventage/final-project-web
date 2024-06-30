import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, BookAIcon, EllipsisVertical } from "lucide-react";
import { Button } from '@/components/ui/button'

export default function Navbar() {

    const { theme, setTheme } = useTheme();

    return (
        <header className="w-full flex items-center justify-between dark:bg-[#09090b] py-2 px-3 border-b shadow-sm">
            <a href="/">
                <span className="flex items-center gap-x-2 font-semibold text-xl md:text-3xl text-dark dark:text-light">
                    <BookAIcon className="size-6" />
                    Traductor
                </span>
            </a>
            <nav className="flex items-center">
                <Button
                    className="rounded-full text-dark dark:text-light"
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
                <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full text-dark dark:text-light"
                >
                    <EllipsisVertical className="size-6" />
                </Button>
            </nav>
        </header>
    );
}
