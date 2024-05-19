export interface Question {
  options: string[]
  question_text: string
}

export interface Course {
  id: number
  title: string
  description: string
  image: string | null
  questions: Question[]
  complexity: number
}
