import Autoplay from 'embla-carousel-autoplay'

import { Course } from '@/entities/Course/types'
import { Carousel, CarouselContent } from '@/shared/ui/carousel'
import { CourseItem } from '@/shared/ui/course-item'

interface CoursesRowProps {
  courses: Course[]
  isLoading?: boolean
}

export const CoursesRow = ({ courses, isLoading }: CoursesRowProps) => {
  return (
    <div className="flex items-center max-w-screen-xl m-auto gap-4 ">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-1">
          {isLoading &&
            Array.from({ length: 5 }).map((_, i) => (
              <CourseItem
                key={i}
                classNames="animate-pulse"
                course={[] as unknown as Course}
              />
            ))}
          {courses.map((course) => (
            <CourseItem
              key={course.id}
              classNames={`transform transition-opacity duration-600 ${
                isLoading ? 'opacity-0' : 'opacity-1'
              }`}
              course={course}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
