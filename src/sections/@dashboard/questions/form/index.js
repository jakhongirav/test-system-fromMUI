import PropTypes from 'prop-types';
import { useState, useMemo, useEffect } from 'react';
import * as Yup from 'yup';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Stack, Button } from '@mui/material';

// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';

// components
import FormProvider from '../../../../components/hook-form';

//
import QuestionsNewEditDetails from './QuestionsNewEditDetails';
import QuestionsNewEditStatusDate from './QuestionsNewEditStatusDate';


// ----------------------------------------------------------------------

QuestionsNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentQuestion: PropTypes.object,
};

export default function QuestionsNewEditForm({ isEdit, currentQuestion }) {

  const navigate = useNavigate();

  const [loadingSave, setLoadingSave] = useState(false);

  const [loadingSend, setLoadingSend] = useState(false);

  const NewUserSchema = Yup.object().shape({
    description: Yup.string().required('Description is required'),
    options: Yup.object().shape({
      A: Yup.string().required('Option A is required'),
      B: Yup.string().required('Option B is required'),
      C: Yup.string().required('Option C is required'),
      D: Yup.string().required('Option D is required'),
    })
  });

  const defaultValues = useMemo(
    () => ({
      questionId: currentQuestion?.id || '17099',
      status: currentQuestion?.status,
      description: currentQuestion?.description,
      answer: currentQuestion?.answer,
      subject: currentQuestion?.subject,
      options: currentQuestion?.options,
    }),
    [currentQuestion]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (isEdit && defaultValues) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentQuestion]);

  const handleCreateAndSend = async (data) => {
    console.log(data, "CREATE")
    // setLoadingSend(true);

    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 500));
    //   reset();
    //   setLoadingSend(false);
    //   navigate(PATH_DASHBOARD.questions.list);
    //   console.log('DATA', JSON.stringify(data, null, 2));
    // } catch (error) {
    //   console.error(error);
    //   setLoadingSend(false);
    // }
  };

  return (
    <FormProvider methods={methods}>
      <Card>
        <QuestionsNewEditStatusDate currentQuestion={currentQuestion} />

        <QuestionsNewEditDetails />
      </Card>

      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button
              color="error"
              size="large"
              variant="contained"
              loading={loadingSave && isSubmitting}
              component={RouterLink}
              to='/dashboard/examquestions'
            >
              Cancel
            </Button>

        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend && isSubmitting}
          onClick={handleSubmit(handleCreateAndSend)}
        >
          {isEdit ? 'Update' : 'Create'} & Save
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
