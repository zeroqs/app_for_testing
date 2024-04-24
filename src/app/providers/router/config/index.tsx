import { RouteProps } from 'react-router-dom'

import {
  AccountPage,
  CoursePage,
  CoursesPage,
  ErrorPage,
  HomePage,
  TestPage,
} from '@/pages'

enum AppRoutes {
  HOME = 'home',
  COURSES = 'courses',
  COURSE = 'course',
  TEST = 'test',
  ACCOUNT = 'account',
  NOTFOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.COURSES]: '/courses',
  [AppRoutes.COURSE]: '/course/:courseId',
  [AppRoutes.TEST]: '/course/:courseId/test',
  [AppRoutes.ACCOUNT]: '/account',
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
  [AppRoutes.ACCOUNT]: {
    path: RoutePath.account,
    element: <AccountPage />,
  },
  [AppRoutes.COURSE]: {
    path: RoutePath.course,
    element: <CoursePage />,
  },
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    element: <TestPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <ErrorPage />,
  },
}
