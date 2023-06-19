// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  calendar: icon('calendar'),
  dashboard: icon('point'),
  resultsIcon: icon('results-icon'),
  questionMark: icon('question-mark'),
  lock: icon('lock-nav'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: 'Bosh sahifa', path: PATH_DASHBOARD.stats, icon: ICONS.dashboard, roles: ['admin', 'student'] },
      { title: 'Imtihon kunlari', path: PATH_DASHBOARD.examdates, icon: ICONS.calendar, roles: ['student'] },
      { title: 'Natijalar', path: PATH_DASHBOARD.results, icon: ICONS.resultsIcon, roles: ['admin'] },
      { title: 'Test Savollari', path: PATH_DASHBOARD.examquestions, icon: ICONS.questionMark, roles: ['student'] },
      { title: 'Foydalanuvchilar', path: PATH_DASHBOARD.admins, icon: ICONS.lock, roles: ['student'] },

      // { title: 'Test savollar', path: PATH_DASHBOARD.stats, icon: ICONS.analytics },
      // { title: 'Natijalar', path: PATH_DASHBOARD.stats, icon: ICONS.analytics },
      // { title: 'Foydalanuvchilar', path: PATH_DASHBOARD.stats, icon: ICONS.analytics },
    ],
  },
];

export default navConfig;
