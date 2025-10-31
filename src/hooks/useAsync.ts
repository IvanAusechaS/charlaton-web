import { useState, useCallback } from 'react'

/**
 * Generic async operation state
 */
interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

/**
 * Custom hook for handling async operations
 * @template T - Type of data returned by async operation
 * @param {Function} asyncFunction - Async function to execute
 * @returns {Object} Async state and execution function
 */
export const useAsync = <T,>(
  asyncFunction: (...args: unknown[]) => Promise<T>
) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  /**
   * Executes the async function
   */
  const execute = useCallback(
    async (...args: unknown[]) => {
      setState({ data: null, loading: true, error: null })
      try {
        const data = await asyncFunction(...args)
        setState({ data, loading: false, error: null })
        return data
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred'
        setState({ data: null, loading: false, error: errorMessage })
        throw error
      }
    },
    [asyncFunction]
  )

  return { ...state, execute }
}
