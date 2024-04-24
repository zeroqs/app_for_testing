import { useFetchTests } from '@/shared/lib/hooks'
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
        <CoursesRow
          isLoading={isLoading}
          courses={tests}
          rightTitle={
            <>
              Или дополнительные тесты <br /> на интересующие темы
            </>
          }
        />
      </div>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
