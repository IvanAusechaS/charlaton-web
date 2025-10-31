import type { ApiResponse } from '../types'

/**
 * Base API configuration
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

/**
 * Generic API error class
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public errors?: string[]
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/**
 * HTTP request methods
 */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

/**
 * Request configuration options
 */
interface RequestConfig {
  method: HttpMethod
  headers?: HeadersInit
  body?: unknown
}

/**
 * Makes an authenticated API request
 * @template T - Expected response data type
 * @param {string} endpoint - API endpoint path
 * @param {RequestConfig} config - Request configuration
 * @returns {Promise<T>} Parsed response data
 * @throws {ApiError} When request fails
 */
async function apiRequest<T>(endpoint: string, config: RequestConfig): Promise<T> {
  const token = localStorage.getItem('authToken')

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(config.headers as Record<string, string>),
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const url = `${API_BASE_URL}${endpoint}`

  try {
    const response = await fetch(url, {
      method: config.method,
      headers,
      body: config.body ? JSON.stringify(config.body) : undefined,
    })

    // Check if response is JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      if (!response.ok) {
        throw new ApiError('Request failed', response.status)
      }
      // For DELETE requests or responses without body
      return undefined as T
    }

    const data: ApiResponse<T> = await response.json()

    if (!response.ok) {
      throw new ApiError(
        data.message || 'Request failed',
        response.status,
        data.errors
      )
    }

    return data.data
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    if (error instanceof Error) {
      throw new ApiError(error.message || 'Network error occurred', 0)
    }
    throw new ApiError('Unknown error occurred', 0)
  }
}

/**
 * Performs a GET request
 * @template T - Expected response data type
 * @param {string} endpoint - API endpoint path
 * @returns {Promise<T>} Response data
 */
export const get = <T>(endpoint: string): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'GET' })
}

/**
 * Performs a POST request
 * @template T - Expected response data type
 * @param {string} endpoint - API endpoint path
 * @param {unknown} body - Request payload
 * @returns {Promise<T>} Response data
 */
export const post = <T>(endpoint: string, body: unknown): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'POST', body })
}

/**
 * Performs a PUT request
 * @template T - Expected response data type
 * @param {string} endpoint - API endpoint path
 * @param {unknown} body - Request payload
 * @returns {Promise<T>} Response data
 */
export const put = <T>(endpoint: string, body: unknown): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'PUT', body })
}

/**
 * Performs a DELETE request
 * @template T - Expected response data type
 * @param {string} endpoint - API endpoint path
 * @returns {Promise<T>} Response data
 */
export const del = <T>(endpoint: string): Promise<T> => {
  return apiRequest<T>(endpoint, { method: 'DELETE' })
}
