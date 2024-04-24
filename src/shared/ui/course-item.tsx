import { useNavigate } from 'react-router-dom'

import { Course } from '@/entities/Course/types'
import { CarouselItem } from '@/shared/ui/carousel'
import { ImageComponent } from '@/shared/ui/Image'

interface CourseItemProps {
  course: Course
  classNames?: string
}

export const CourseItem = ({ course, classNames }: CourseItemProps) => {
  const navigate = useNavigate()

  return (
    <CarouselItem
      key={course.id}
      onClick={() => navigate(`course/${course.id}`)}
      className={`${classNames} $pl-1 md:basis-1/2 lg:basis-1/2 cursor-pointer`}
    >
      <div className="min-w-72 h-52 p-1 relative">
        {course.image ? (
          <ImageComponent
            src={course.image}
            imageClassName="absolute top-0 left-0 w-full h-full object-cover rounded-xl brightness-50 "
            loadingClassName="min-w-72 h-52 bg-slate-500 rounded-xl"
          />
        ) : (
          <div className="min-w-72 h-52 bg-slate-500 rounded-xl" />
        )}

        <span className="text-lg text-nowrap font-medium absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
          {course.title}
        </span>
      </div>
    </CarouselItem>
  )
}
