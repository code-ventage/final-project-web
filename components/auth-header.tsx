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
                className="border"
                size="sm"
                variant="ghost"
                asChild
            >
                <Link
                    href="/auth/register"
                    className="font-medium"
                >
                    Crear cuenta
                </Link>
            </Button>
        </header>
    );
}
