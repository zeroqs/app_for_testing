export interface Question {
  options: string[]
  question_text: string
}

interface LectureSection {
  title: string
  content: string
}

export interface Lecture {
  title: string
  conclusion: string
  introduction: string
  sections: LectureSection[]
}

export interface Course {
  id: number
  title: string
  description: string
  image: string | null
  questions: Question[]
  complexity: number
  lecture: Lecture
}
