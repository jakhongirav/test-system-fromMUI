import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------
//* Log in page 
export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));

//* Pages 
export const Results = Loadable(lazy(() => import('../pages/Results')));
export const Admins = Loadable(lazy(() => import('../pages/Admins')));

//* Dashboard Exam Questions
export const ExamQuestions = Loadable(lazy(() => import('../pages/ExamQuestions')));

export const QuestionsCreate = Loadable(lazy(() => import('../sections/@dashboard/questions/QuestionsCreate')))

export const QuestionsEdit = Loadable(lazy(() => import('../sections/@dashboard/questions/QuestionsEdit')))

//* Dashboard Exam Dates
export const ExamDates = Loadable(lazy(() => import('../pages/ExamDates')));

//* Dashboard Stats
export const Stats = Loadable(lazy(() => import('../pages/Stats')));
export const StarterTest = Loadable(lazy(() => import('../sections/@dashboard/stats/StarterTest')));





//* ERROR
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

