import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { cutDescription } from '@/shared/lib/cut-description'
import { useFetchTests, useSortTests } from '@/shared/lib/hooks'
import { showComplexity } from '@/shared/lib/show-complexity'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { LoadingSpinner } from '@/shared/ui/loading-spinner'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'

const Courses = () => {
  const [sortType, setSortType] = useState<string | null>(null)

  const { tests, isLoading, error } = useSortTests(Number(sortType))
  const navigate = useNavigate()

  if (error) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center max-w-screen-xl m-auto gap-4 px-4 py-2">
        {error}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center max-w-screen-xl m-auto gap-4 px-4 py-2">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col  max-w-screen-xl m-auto gap-4 px-4 py-2">
      <div className="flex gap-2 items-center mt-8 justify-end">
        <p className="leading-7 [&:not(:first-child)]:mt-6">Сортировать по</p>
        <Select onValueChange={setSortType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Сложности" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Легкие</SelectItem>
            <SelectItem value="1">Средние</SelectItem>
            <SelectItem value="2">Сложные</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-courses gap-4 mt-8">
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
              <CardDescription>
                {cutDescription(test.description)}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Сложность : {showComplexity(test.complexity)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default Courses
