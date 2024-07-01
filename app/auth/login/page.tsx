"use client";

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { useToast } from '@/components/ui/use-toast'
import { Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthHeader from '@/components/auth-header'
import type { AuthResponse } from '@/hooks/useAuth'

export default function LoginPage() {

    const { login, isLoading, setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { toast } = useToast();

    const clearForm = () => {
        setUsername('');
        setPassword('');
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = await login({ username, password })
        console.log(data);

        if (data && data.response.status === '200') {
            setUser(data.response.data[0]);
            router.push('/');
            clearForm();
            toast({
                title: data.response.message,
                duration: 3000
            })
            return;
        }

        return toast({
            variant: 'destructive',
            title: data?.response.message,
            duration: 3000
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-[#09090b]">
            <AuthHeader />
            <main className="flex flex-col items-center justify-center w-full px-5">
                <h1 className="text-4xl font-bold mb-8">Iniciar sesión</h1>
                <form
                    className="w-full max-w-[400px] flex flex-col items-center justify-center gap-y-3"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full">
                        <Input
                            className="dark:bg-[#09090b]"
                            placeholder="Nombre de usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="w-full">
                        <Input
                            type="password"
                            className="dark:bg-[#09090b]"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>

                    <div className="w-full">
                        <Button
                            className="w-full font-semibold"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading && <Loader className="mr-2 size-6 animate-spin" />}
                            <span>{isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}</span>
                        </Button>
                    </div>
                </form>
            </main>

            <footer className="fixed bottom-0 w-full flex items-center justify-center py-4 px-3 border-t shadow-sm">
                <Link href="/auth/register" className="text-blue-500 hover:underline">
                    No tienes cuenta? Crea una
                </Link>
            </footer>
        </div>
    );
}
