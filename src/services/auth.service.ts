import { get, post } from './api'
import type { User, AuthCredentials, RegisterData } from '../types'

/**
 * Authentication token storage key
 */
const AUTH_TOKEN_KEY = 'authToken'

/**
 * Authenticates a user with email and password
 * @param {AuthCredentials} credentials - User login credentials
 * @returns {Promise<{ user: User; token: string }>} User data and auth token
 */
export const login = async (
  credentials: AuthCredentials
): Promise<{ user: User; token: string }> => {
  const response = await post<{ user: User; token: string }>('/auth/login', credentials)
  localStorage.setItem(AUTH_TOKEN_KEY, response.token)
  return response
}

/**
 * Registers a new user account
 * @param {RegisterData} data - User registration information
 * @returns {Promise<{ user: User; token: string }>} Created user data and auth token
 */
export const register = async (
  data: RegisterData
): Promise<{ user: User; token: string }> => {
  const response = await post<{ user: User; token: string }>('/auth/register', data)
  localStorage.setItem(AUTH_TOKEN_KEY, response.token)
  return response
}

/**
 * Logs out the current user
 */
export const logout = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

/**
 * Retrieves the current authenticated user's profile
 * @returns {Promise<User>} Current user data
 */
export const getCurrentUser = async (): Promise<User> => {
  return get<User>('/auth/me')
}

/**
 * Checks if user is currently authenticated
 * @returns {boolean} True if auth token exists
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(AUTH_TOKEN_KEY)
}
