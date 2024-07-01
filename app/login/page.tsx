'use client'

import { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthContext from '@/context/auth-context'

export default function LoginPage() {
  const { login, isLoading, setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { toast } = useToast()
  const params = useSearchParams()

  const clearForm = () => {
    setUsername('')
    setPassword('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await login({ username, password })

    if (data && data.response.status === '200') {
      setUser(data.response.data[0])
      clearForm()
      toast({
        title: data.response.message,
        duration: 2000,
      })
      router.push(params.get('redirect') ?? '/')
    } else {
      return toast({
        variant: 'destructive',
        title: data?.response.message,
        duration: 2000,
      })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex w-full flex-col items-center justify-center px-5">
        <h1 className="mb-8 text-4xl font-bold">Iniciar sesión</h1>
        <form
          className="flex w-full max-w-[400px] flex-col items-center justify-center gap-y-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <Input
              placeholder="Nombre de usuario"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Input
              type="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Button
              className="w-full font-semibold"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader className="mr-2 size-6 animate-spin" />}
              <span>
                {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </span>
            </Button>
          </div>
        </form>
      </main>

      <footer className="fixed bottom-0 flex w-full items-center justify-center border-t px-3 py-3 shadow-sm">
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          No tienes cuenta? Crea una
        </Link>
      </footer>
    </div>
  )
}
