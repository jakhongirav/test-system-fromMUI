// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = { 
  root: ROOTS_DASHBOARD,
  stats: path(ROOTS_DASHBOARD, '/stats'),
  examdates: path(ROOTS_DASHBOARD, '/examdates'),
  results: path(ROOTS_DASHBOARD, '/results'),
  admins: path(ROOTS_DASHBOARD, '/admins'),
  

  //* Exam Questions
  examquestions: path(ROOTS_DASHBOARD, '/examquestions'),
  questionscreate: path(ROOTS_DASHBOARD, '/examquestions/questionscreate'),   
  demoEdit: path(ROOTS_DASHBOARD, '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit'),
  questionsedit: {
    edit: (id) => path(ROOTS_DASHBOARD, `/examquestions/${id}/questionsedit`),
  }

  // user:
  //   root: path(ROOTS_DASHBOARD, '/user'),
  //   four: path(ROOTS_DASHBOARD, '/user/four'),
  //   five: path(ROOTS_DASHBOARD, '/user/five'),
  //   six: path(ROOTS_DASHBOARD, '/user/six'),
  // },
};
