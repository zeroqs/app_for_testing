import { lazy } from 'react'

export const HomePage = lazy(() => import('./Home'))
export const CoursesPage = lazy(() => import('./Courses'))
export const CoursePage = lazy(() => import('./Course'))
export const ErrorPage = lazy(() => import('./Error'))
export const TestPage = lazy(() => import('./Test'))
export const LecturePage = lazy(() => import('./Lecture'))
