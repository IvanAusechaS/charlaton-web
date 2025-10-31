import React, { createContext, useState, useEffect, ReactNode } from 'react'
import type { User } from '../types'
import * as authService from '../services/auth.service'

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

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

/**
 * Authentication provider props
 */
interface AuthProviderProps {
  children: ReactNode
}

/**
 * Authentication context provider
 * @param {AuthProviderProps} props - Provider props
 * @returns {JSX.Element} Provider component
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      if (authService.isAuthenticated()) {
        try {
          const currentUser = await authService.getCurrentUser()
          setUser(currentUser)
        } catch (error) {
          console.error('Failed to fetch current user:', error)
          authService.logout()
        }
      }
      setLoading(false)
    }

    initAuth()
  }, [])

  /**
   * Logs in a user
   * @param {string} email - User email
   * @param {string} password - User password
   * @throws {Error} When login fails
   */
  const login = async (email: string, password: string): Promise<void> => {
    try {
      const { user: loggedInUser } = await authService.login({ email, password })
      setUser(loggedInUser)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  /**
   * Logs out the current user
   */
  const logout = () => {
    authService.logout()
    setUser(null)
  }

  const value: AuthContextValue = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Export the context for the custom hook
export { AuthContext }
