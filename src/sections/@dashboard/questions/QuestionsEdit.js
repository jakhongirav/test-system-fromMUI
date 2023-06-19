import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock_
import { _questions } from '../../../_mock/arrays/_questions';
// components
import { useSettingsContext } from '../../../components/settings';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
// sections
import QuestionsNewEditForm from './form/index';

// ----------------------------------------------------------------------

export default function QuestionsEdit() {
  const { themeStretch } = useSettingsContext();

  const { id } = useParams();

  const currentQuestion = _questions.find((question) => question.id);

  return (
    <>
      <Helmet>
        <title> TIFT | Questions Edit</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Edit question"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Exam Questions',
              href: PATH_DASHBOARD.examquestions,
            },
            { name: `Edit` },
          ]}
        />

        <QuestionsNewEditForm isEdit currentQuestion={currentQuestion} />
      </Container>
    </>
  );
}
