import { useNavigate } from 'react-router-dom'

import { useFetchTests } from '@/shared/lib/hooks'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { LoadingSpinner } from '@/shared/ui/loading-spinner'

const Courses = () => {
  const { tests, isLoading, error } = useFetchTests()
  const navigate = useNavigate()

  if (error) {
    return (
      <div className="flex flex-col  max-w-screen-xl m-auto gap-4 px-4 py-2">
        {error}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex flex-col  max-w-screen-xl m-auto gap-4 px-4 py-2">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col  max-w-screen-xl m-auto gap-4 px-4 py-2">
      <div className="grid grid-cols-courses gap-4 mt-20">
        {tests.map((test) => (
          <Card
            key={test.id}
            onClick={() => navigate(`/course/${test.id}`)}
            className="cursor-pointer hover:shadow-custom transition duration-300"
          >
            <CardHeader>
              <CardTitle>{test.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{test.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Courses
