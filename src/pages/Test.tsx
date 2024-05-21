import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { RoutePath } from '@/app/providers/router/config'
import { Course, Question } from '@/entities/Course/types'
import { useFetchTestResult } from '@/shared/lib/hooks'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/shared/ui/form'
import { LoadingSpinner } from '@/shared/ui/loading-spinner'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group'
import { useToast } from '@/shared/ui/use-toast'

const Test = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { result, isLoading, error, fetchResults } = useFetchTestResult()

  const state = location.state as Course | undefined
  const { toast } = useToast()

  const FormSchema = z.object({
    answers: z.array(z.number()).length(location.state?.questions.length || 0, {
      message: 'Пожалуйста ответье на все вопросы',
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answers: [],
    },
    mode: 'onBlur',
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const answers = data.answers
    setOpen(true)
    fetchResults(answers, state!.id)
  }

  const resetTest = () => {
    window.location.reload()
    window.scrollTo({ top: 0 })
  }

  const closeTest = () => {
    navigate(RoutePath.courses)
  }

  const handleModal = () => {
    setOpen(!open)
  }

  useEffect(() => {
    console.log(form.formState.errors.answers)
    if (form.formState.errors.answers) {
      toast({
        variant: 'destructive',
        title: 'Ошибка ввода ответов',
        description: (
          <span className="rounded-md font-semibold">
            {form.formState.errors.answers.message}
          </span>
        ),
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.formState.errors.answers])

  if (!state) {
    return (
      <div className="flex justify-center items-center min-h-80 ">
        <span>Ошибка</span>
      </div>
    )
  }

  return (
    <div className="flex justify-between px-4 py-2 max-w-7xl m-auto flex-col  mt-28">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
          <FormField
            control={form.control}
            name="answers"
            render={({ field }) => (
              <>
                {state.questions.map((question, questionIndex) => (
                  <FormItem key={question.question_text}>
                    <FormLabel>{question.question_text}</FormLabel>
                    <RadioGroup
                      className="flex flex-col space-y-1"
                      onValueChange={(value) => {
                        field.value[questionIndex] = Number(value)
                      }}
                    >
                      {question.options.map((option, answerIndex) => (
                        <FormItem
                          key={option}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={String(answerIndex)} />
                          </FormControl>
                          <FormLabel className="cursor-pointer font-normal">
                            {option}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormItem>
                ))}
              </>
            )}
          />
          <div className="flex items-center justify-center">
            <Button className=" mt-12" type="submit" size="lg">
              Завершить тест
            </Button>
          </div>
        </form>
      </Form>

      <AlertDialog open={open} onOpenChange={handleModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isLoading
                ? 'Сверяем ответы'
                : `Вы набрали ${result}/${state.questions.length} баллов`}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {isLoading && (
                <div className="flex justify-center py-6">
                  <LoadingSpinner />
                </div>
              )}
              {!isLoading && result && (
                <div className="py-6">Ваш результат: {result}</div>
              )}
              {error && 'error'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {isLoading ? (
              <>
                <AlertDialogCancel disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Перепройти
                </AlertDialogCancel>
                <AlertDialogAction disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Закончить
                </AlertDialogAction>
              </>
            ) : (
              <>
                <AlertDialogCancel onClick={resetTest}>
                  Перепройти
                </AlertDialogCancel>
                <AlertDialogAction onClick={closeTest}>
                  Закончить
                </AlertDialogAction>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Test
