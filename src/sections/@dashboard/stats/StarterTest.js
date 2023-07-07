import { Helmet } from 'react-helmet-async';

import { useState } from 'react';

import { Container, Stack, Typography, Button } from '@mui/material';

import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';

import { PATH_DASHBOARD } from '../../../routes/paths';

import { useSettingsContext } from '../../../components/settings';

import { _questions } from '../../../_mock/arrays';

import Iconify from '../../../components/iconify/Iconify';

export default function StarterTest() {

  const { themeStretch } = useSettingsContext();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1)

  }

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const lastQuestion = currentQuestion === _questions.length



  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <CustomBreadcrumbs
          heading="Bosh sahifa"
          sx={{
            p: '0 24px',
            m: 0
          }}
          links={[
            {
              name: '',
              href: PATH_DASHBOARD.root,
            },
          ]}
        />

        <Button variant='contained' color='success' size="medium" startIcon={<Iconify icon="mdi:clock-outline" />}>
          1:34:23
        </Button>
      </Stack>

      <Helmet>
        <title> TIFT | Exam</title>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'} sx={{
        borderRadius: '6px',
        boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
        padding: '24px',
        mt: 3,
      }}>
        <Stack direction='row' spacing={1}>
          {_questions.map((question, index) => (
            <Stack direction='row' alignItems='center' spacing={1}>
              <Button variant='contained' color={currentQuestion === index ? 'primary' : 'inherit'}>{index + 1}</Button>
              {index + 1 !== _questions.length ? <Iconify icon='ep:arrow-right' /> : ''}
            </Stack>
          )
          )}
        </Stack>
        <Stack direction='column' alignItems='center'>
          <Stack>{currentQuestion}</Stack>
          <Stack direction='row' justifyContent='space-between'>
            <Button
              onClick={handleBack}
              disabled={currentQuestion === 0}
            >Orqaga</Button>
            <Button
              onClick={handleNext}
              disabled={lastQuestion}
            >{lastQuestion ? 'Yuborish' : 'Oldinga'}</Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
};