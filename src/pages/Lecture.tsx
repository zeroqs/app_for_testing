import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Course } from '@/entities/Course/types'
import { Button } from '@/shared/ui/button'

const Lecture = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const state = location.state as Course | undefined

  if (!state)
    return (
      <div className="flex flex-col justify-center items-center gap-11 max-w-7xl m-auto px-4 py-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 text-center">
          Error
        </h3>
        <Button className="max-w-[300px]" asChild size="lg">
          <Link to="/courses">Перейти к списку тестов</Link>
        </Button>
      </div>
    )

  const lecture = state.lecture

  return (
    <div className="flex flex-col gap-11 max-w-7xl m-auto px-4 py-2">
      <section>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 text-center">
          {lecture.title}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6> text-center text-balance mt-4">
          {lecture.introduction}
        </p>
      </section>

      <section>
        {lecture.sections.map((section, index) => (
          <section key={index} className="mt-8">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
              {section.content}
            </p>
          </section>
        ))}
      </section>

      <section>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
          Заключение
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-2 text-center  text-balance">
          {lecture.conclusion}
        </p>
      </section>

      <section className="flex items-center max-w-screen-sm m-auto gap-5 ">
        <Button onClick={() => navigate(-1)} variant="outline" size="lg">
          Назад
        </Button>
        <Button asChild size="lg">
          <Link to={`/course/${state.id}/test`} state={state}>
            Перейти к тесту
          </Link>
        </Button>
      </section>
    </div>
  )
}

export default Lecture
