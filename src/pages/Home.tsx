/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom'

import { useFetchTests } from '@/shared/lib/hooks'
import { ComplexityBadge } from '@/shared/ui/complexity-badge'
import { CoursesRow } from '@/shared/ui/courses-row'
import { ImageComponent } from '@/shared/ui/Image'

const Home = () => {
  const navigate = useNavigate()
  const { tests, isLoading } = useFetchTests()

  return (
    <>
      <div className="flex justify-center items-center min-h-80 ">
        <h1 className="text-2xl antialiased font-semibold tracking-wide	">
          Цифровой Класс: Мини-Курсы по Информационным Технологиям
        </h1>
      </div>
      <div className="flex flex-col gap-12 mt-24">
        <CoursesRow
          isLoading={isLoading}
          courses={tests}
          leftTitle={
            <>
              Выбирай общие тесты <br /> по уровню сложности
            </>
          }
        />

        <div className="grid grid-cols-courses gap-4 mt-8  px-20">
          {tests.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="min-w-72 h-52 p-1 relative cursor-pointer"
            >
              {course.image && (
                <div className="absolute top-[10px] left-[10px] z-[1]">
                  <ComplexityBadge complexity={course.complexity} />
                </div>
              )}
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
          ))}
        </div>
      </div>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
