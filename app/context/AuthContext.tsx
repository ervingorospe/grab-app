'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { getEmailFromToken } from '@/jwt'
import { apiGetUserByEmail } from '@/api'

// Define user type (adjust fields as needed)
interface User {
  id: string
  email: string
  role: string
  active: boolean
  firstName: string
  lastName: string
  birthDate: string
  contactNumber: string
}

interface Token {
  accessToken: string
  refreshToken: string
}

interface AuthContextType {
  user: User | null
  login: (userData: User) => void
  logout: () => void
  token: (token: Token) => void
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  // Load user from localStorage when the app starts
  useEffect(() => {
    const fetchUser = async () => {
      const email = await getEmailFromToken()
      const response = await apiGetUserByEmail('/api/user/info', email)
      setUser(response.data)
    }

    fetchUser()
  }, [])

  // Login function
  const login = (userData: User) => {
    setUser(userData)
  }

  const token = (token: Token) => {
    Cookies.set('token-auth', token.accessToken, { secure: true, sameSite: 'strict' })
    Cookies.set('token-refresh', token.refreshToken, { secure: true, sameSite: 'strict' })
  }

  // Logout function
  const logout = () => {
    setUser(null)
    Cookies.remove('token-auth')
    Cookies.remove('token-refresh')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>{children}</AuthContext.Provider>
  )
}

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
