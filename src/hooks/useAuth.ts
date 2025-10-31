import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import type { User } from '../types'

/**
 * Authentication context value interface
 */
interface AuthContextValue {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

/**
 * Hook to access authentication context
 * @returns {AuthContextValue} Authentication context value
 * @throws {Error} If used outside AuthProvider
 */
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
