import { createClient } from '@supabase/supabase-js'

import { Course } from '@/entities/Course/types'
import { User } from '@/entities/User/types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export const fetchUser = async (): Promise<User> => {
  const { data: user, error } = await supabase.rpc('get_user_passed_tests')

  if (error) throw new Error(error.message)

  return user
}

export const fetchTests = async (): Promise<Course[]> => {
  const { data: tests, error } = await supabase.rpc('get_tests_data')

  if (error) throw new Error(error.message)

  return tests
}

export const fetchTest = async (id: number): Promise<Course> => {
  const { data: test, error } = await supabase.rpc('get_test_info', {
    test_id: id,
  })

  if (error) throw new Error(error.message)

  return test[0]
}

export const fetchTestResult = async (answers: number[]): Promise<number> => {
  const { data: test, error } = await supabase.rpc('check_answers', {
    answer_indices: answers,
  })

  if (error) throw new Error(error.message)

  return test
}
