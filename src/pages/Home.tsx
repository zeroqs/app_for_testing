/* eslint-disable jsx-a11y/no-static-element-interactions */

import { Link } from 'react-router-dom'

import { useFetchTests } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui/button'
import { CoursesRow } from '@/shared/ui/courses-row'

const Home = () => {
  const { tests, isLoading } = useFetchTests()

  return (
    <>
      <div className="flex justify-center items-center min-h-80 ">
        <h1 className="text-2xl antialiased font-semibold tracking-wide	">
          Цифровой Класс: Мини-Курсы по Информационным Технологиям
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-7">
        <span className="font-medium text-base antialiased text-center">
          Выбирай тесты по уровню сложности
        </span>
        <CoursesRow isLoading={isLoading} courses={tests} />
        <div className="flex justify-center items-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/courses">Перейти к списку курсов</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
