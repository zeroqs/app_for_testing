import { useCallback, useEffect, useState } from 'react'

import { Course } from '@/entities/Course/types'
import { fetchTest, fetchTestResult, fetchTests } from '@/shared/lib/supabase'

export const useFetchTests = () => {
  const [tests, setTests] = useState<Course[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const tests = await fetchTests()
        setTests(tests)
      } catch (error) {
        setError(error as string)
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { tests, error, isLoading }
}

export const useFetchTest = (id: number | string) => {
  const [test, setTest] = useState<Course>({} as Course)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const test = await fetchTest(Number(id))
        setTest(test)
      } catch (error) {
        setError(error as string)
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [id])

  return { test, error, isLoading }
}

export const useFetchTestResult = () => {
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)

  const fetchResults = useCallback(
    async (answers: number[], courseId: number) => {
      setLoading(true)

      try {
        const result = await fetchTestResult(answers, courseId)
        setResult(result)
      } catch (error) {
        setError(error as string)
        console.error(error)
      } finally {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setLoading(false)
      }
    },
    [],
  )

  return {
    result,
    error,
    isLoading,
    fetchResults,
  }
}

export const useSortTests = (sortKey: number | null) => {
  const { tests: originalTests, isLoading, error } = useFetchTests()

  const [tests, setTests] = useState<Course[]>([])

  useEffect(() => {
    if (sortKey !== null) {
      setTests(
        [...originalTests].sort((a, b) => {
          if (a.complexity === sortKey && b.complexity !== sortKey) {
            return -1
          }
          if (a.complexity !== sortKey && b.complexity === sortKey) {
            return 1
          }
          return a.complexity - b.complexity
        }),
      )
    }
  }, [sortKey])

  return {
    tests: tests.length > 0 ? tests : originalTests,
    isLoading,
    error,
  }
}
