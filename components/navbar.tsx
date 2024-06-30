import { MoonIcon, SunIcon, BookAIcon, EllipsisVertical } from "lucide-react";
import { Button } from '@/components/ui/button'

export default function Navbar() {
    return (
        <header className="w-full flex items-center justify-between py-2 px-3 border-b shadow-sm">
            <a href="/">
                <span className="flex items-center gap-x-2 font-semibold text-xl md:text-3xl">
                    <BookAIcon className="size-6" />
                    Traductor
                </span>
            </a>
            <nav className="flex items-center">
                <Button className="rounded-full" size="icon" variant="ghost">
                    <MoonIcon className="size-6" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">

                    <EllipsisVertical className="size-6" />
                </Button>
            </nav>
        </header>
    );
}
