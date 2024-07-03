'use client'

import { useContext, useState } from 'react'
import SignUpNavbar from '@/components/navbar/signup-navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthContext from '@/context/auth-context'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { Loader, UserPlus } from 'lucide-react'

export default function SignUpPage() {
  const { isLoading, signup } = useContext(AuthContext)
  const { toast } = useToast()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const clearForm = () => {
    setUsername('')
    setPassword('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = await signup({ username, password })

    if (data && data.response.status === '200') {
      clearForm()
      toast({
        title: data.response.message,
        description: 'Inicie sesión para continuar.',
        duration: 2000,
      })
      router.push('/login')
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
      <SignUpNavbar />
      <main className="flex w-full flex-col items-center justify-center px-5">
        <h1 className="mb-8 text-4xl font-bold">Crear cuenta</h1>
        <form
          className="flex w-full max-w-[400px] flex-col gap-y-3"
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
              required
            />
          </div>

          <div>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>

          <div className="w-full">
            <Button className="w-full font-semibold">
              {isLoading ? (
                <Loader className="animate-spin mr-2 size-4" />
              ) : (
                <>
                  <UserPlus className="mr-2 size-4" />
                  <span>Crear cuenta</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
