import { Helmet } from 'react-helmet-async';

import { useState, useMemo, useEffect } from 'react';

import { Container, Stack, Typography, Button, Divider, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';

import { PATH_DASHBOARD } from '../../../routes/paths';

import { useSettingsContext } from '../../../components/settings';

import { _questions } from '../../../_mock/arrays';

import Iconify from '../../../components/iconify/Iconify';

export default function StarterTest() {

  const { themeStretch } = useSettingsContext();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [questionsList, setQuestionsList] = useState(_questions);

  const lastQuestion = currentIndex + 1 === questionsList.length

  const [currentQuestion, setCurrentQuestion] = useState({});

  useEffect(() => {
    setCurrentQuestion(questionsList[currentIndex])
  }, [currentIndex, questionsList])

  const handleSwitchQuestion = (index) => {
    setCurrentIndex(index);
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const handleBack = () => {
    setCurrentIndex(currentIndex - 1)
  }

  const handleChangeRadio = (event) => {
    const modifiedQuestion = { ...currentQuestion, modified: true, selected: event.target.value, };

    const updatedList = questionsList;
    updatedList[currentIndex] = modifiedQuestion;
    setQuestionsList(updatedList);
    console.log(updatedList);
    console.log(questionsList);
  }
  console.log(questionsList);


  return (
    <>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <CustomBreadcrumbs
          heading="Bosh sahifa"
          sx={{
            p: '0',
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
        mt: 3,
        position: 'relative',
      }}>
        <Stack direction='row' spacing={1} sx={{
          mb: 4,
          padding: '24px',
        }}>
          {questionsList.map((question, index) => (
            <Stack key={question.id} direction='row' alignItems='center' spacing={1}>
              <Button variant='contained' color={currentIndex === index ? 'primary' : 'inherit'} onClick={() => handleSwitchQuestion(index)} sx={{
                ...((question.modified && currentIndex !== index) && {
                  background: 'rgba(115, 103, 240, 0.08)',
                  color: '#7367F0',
                })

              }}>{index + 1}</Button>
              {index + 1 !== _questions.length ? <Iconify icon='ep:arrow-right' /> : ''}
            </Stack>
          ))}
        </Stack>

        <Divider sx={{ position: 'absolute', right: 0, left: 0, }} />

        <Stack direction='column' sx={{
          padding: '24px',
        }}>
          <Stack direction='column'>
            <Typography variant='h3' sx={{
              textAlign: 'right'
            }}>MATEMATIKA</Typography>
            <Typography variant='h4' sx={{
              textAlign: 'center',
            }}>{currentIndex + 1} - SAVOL</Typography>
            <Typography variant='subtitle1'>{currentQuestion.description}</Typography>
            {currentQuestion.selected}
            <FormControl component="fieldset">
              <RadioGroup onChange={(event) => handleChangeRadio(event)} defaultValue={currentQuestion.selected} defaultChecked={false}>
                {
                  currentQuestion.id ? Object.keys(currentQuestion.options).map((option) => {
                    console.log(currentQuestion.id)

                    return (
                      <FormControlLabel
                        key={currentQuestion.options[option]}
                        value={option}
                        control={<Radio option={currentQuestion.options[option]} />}
                        label={currentQuestion.options[option]}
                        sx={{ textTransform: 'capitalize' }}
                      />
                    )
                  }) : ''
                }
              </RadioGroup>
            </FormControl>
          </Stack>
          <Stack direction='row' justifyContent='space-between'>
            <Button
              variant='contained'
              onClick={handleBack}
              disabled={currentIndex === 0}
            >Orqaga</Button>
            <Button
              variant='contained'
              onClick={handleNext}
              disabled={lastQuestion}
            >{lastQuestion ? 'Yuborish' : 'Oldinga'}</Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
};