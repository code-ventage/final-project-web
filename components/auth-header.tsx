import Link from 'next/link'
import { BookAIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AuthHeader() {
    return (
        <header className="fixed top-0 w-full flex items-center justify-between p-5 border-b shadow-sm">
            <Link href="/">
                <BookAIcon className="size-8" />
            </Link>

            <Button
                className="font-semibold"
                size="sm"
                asChild
            >
                <Link href="/auth/register">
                    Crear cuenta
                </Link>
            </Button>
        </header>
    );
}
