import { RouteProps } from 'react-router-dom'

import {
  CoursePage,
  CoursesPage,
  ErrorPage,
  HomePage,
  LecturePage,
  TestPage,
} from '@/pages'

enum AppRoutes {
  HOME = 'home',
  COURSES = 'courses',
  COURSE = 'course',
  LECTURE = 'lecture',
  TEST = 'test',
  NOTFOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.COURSES]: '/courses',
  [AppRoutes.COURSE]: '/course/:courseId',
  [AppRoutes.TEST]: '/course/:courseId/test',
  [AppRoutes.LECTURE]: '/lecture',
  [AppRoutes.NOTFOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.COURSES]: {
    path: RoutePath.courses,
    element: <CoursesPage />,
  },
  [AppRoutes.COURSE]: {
    path: RoutePath.course,
    element: <CoursePage />,
  },
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    element: <TestPage />,
  },
  [AppRoutes.LECTURE]: {
    path: RoutePath.lecture,
    element: <LecturePage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <ErrorPage />,
  },
}
