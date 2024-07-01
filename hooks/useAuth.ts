import { useState } from 'react'

export type User = {
    username: string;
    password: string;
}

export interface AuthResponse {
    response: {
        data: User[];
        message: string;
        status: string;

    },
    version: string;
}

const BASE_URL = process.env.APP_URL ?? 'http://localhost:34545'

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const login = async (user: User) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            return (await response.json()) as AuthResponse
        } catch (error) {
            return null;
        } finally {
            setIsLoading(false)
        }
    }

    const logout = () => setUser(null)

    return { user, setUser, isLoading, login, logout }
}
