import { createContext } from 'react'
import { useAuth, User, AuthResponse } from '@/hooks/useAuth'

interface AuthContext {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<any>>
  isLoading: boolean
  login: (user: User) => Promise<AuthResponse | null>
  logout: () => void
}

const AuthContext = createContext({} as AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { ...auth } = useAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthContext
