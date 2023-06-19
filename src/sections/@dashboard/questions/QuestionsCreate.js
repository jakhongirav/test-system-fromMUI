import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import { useSettingsContext } from '../../../components/settings';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
// sections
import QuestionsNewEditForm from './form';

// ----------------------------------------------------------------------

export default function QuestionsCreate() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> TIFT | Questions: Create a new question</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Create a new question"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Questions List',
              href: PATH_DASHBOARD.examquestions,
            },
            {
              name: 'New question',
            },
          ]}
        />

        <QuestionsNewEditForm />
      </Container>
    </>
  );
}
