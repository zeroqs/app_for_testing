import { Link, useParams } from 'react-router-dom'

import { useFetchTest } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui/button'
import { CourseSkeleton } from '@/shared/ui/course-skeleton'

const Course = () => {
  const { courseId } = useParams()

  const { test, isLoading } = useFetchTest(courseId || '')

  if (isLoading) return <CourseSkeleton />

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-center items-center min-h-80 ">
        <h1 className="text-2xl antialiased font-semibold tracking-wide	">
          {test.title}
        </h1>
      </div>

      <div className="flex items-center max-w-screen-xl m-auto gap-4 mb-32">
        <span>{test.description}</span>
      </div>

      <div className="flex items-center max-w-screen-sm m-auto gap-5 ">
        <Button asChild variant="outline" size="lg">
          <Link to="/lecture" state={test}>
            Пройти введение
          </Link>
        </Button>
        <Button asChild size="lg">
          <Link to={`/course/${courseId}/test`} state={test}>
            Начать тест
          </Link>
        </Button>
      </div>
    </div>
  )
}

/* eslint-disable import/no-default-export */
export default Course
