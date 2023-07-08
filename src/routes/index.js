import { Navigate, useRoutes } from 'react-router-dom';
// auth
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  Page404,
  LoginPage,
  Stats,
  ExamDates,
  Results,
  ExamQuestions,
  Admins,
  StarterTest,

  //* @Dashboard Exam Questions
  QuestionsCreate,
  QuestionsEdit,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true, },
        { path: 'examdates', element: <ExamDates /> },
        { path: 'results', element: <Results /> },
        { path: 'admins', element: <Admins /> },

        //* Dashboard Exam Questions
        { path: 'examquestions', element: <ExamQuestions /> },
        { path: 'examquestions/questionscreate', element: <QuestionsCreate /> },
        { path: 'examquestions/:id/questionsedit', element: <QuestionsEdit /> },

        //* Dashboard Stats
        { path: 'stats', element: <Stats /> },
        { path: 'stats/startertest', element: <StarterTest /> }

        // { path: 'two', element: <PageTwo /> },
        // { path: 'three', element: <PageThree /> },
        // {
        //   path: 'user',
        //   children: [
        //     { element: <Navigate to="/dashboard/user/four" replace />, index: true },
        //     { path: 'four', element: <Stats /> },
        //     { path: 'five', element: <Stats /> },
        //     { path: 'six', element: <Stats /> },
        //   ],
        // },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
