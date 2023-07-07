import { Helmet } from 'react-helmet-async';

import { useState } from 'react';

import { Container, Stack, Typography, Button, Box, Step, Paper, Stepper, StepLabel } from '@mui/material';
import { alpha } from '@mui/material/styles';

import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';

import { PATH_DASHBOARD } from '../../../routes/paths';

import { useSettingsContext } from '../../../components/settings';

import { _questions } from '../../../_mock/arrays';

export default function StarterTest() {

  const { themeStretch } = useSettingsContext();

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', 'Select campaign settings', 'Create an ad group', 'Create an ad', 'Select campaign settings', 'Create an ad group', 'Create an ad', 'Select campaign settings', 'Create an ad group', 'Create an ad'];

  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <CustomBreadcrumbs
          heading="Bosh sahifa"
          sx={{
            p: '0 24px'
          }}
          links={[
            {
              name: '',
              href: PATH_DASHBOARD.root,
            },
          ]}
        />


      </Stack>

      <Helmet>
        <title> TIFT | Exam</title>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'} sx={{
        borderRadius: '6px',
        boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
        padding: '24px',
      }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Paper
              sx={{
                p: 3,
                my: 3,
                minHeight: 120,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
              }}
            >
              <Typography sx={{ my: 1 }}>All steps completed - you&apos;re finished</Typography>
            </Paper>

            <Box sx={{ display: 'flex' }}>
              <Box sx={{ flexGrow: 1 }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <Paper
              sx={{
                p: 3,
                my: 3,
                minHeight: 120,
                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
              }}
            >
              <Typography sx={{ my: 1 }}>Step {activeStep + 1}</Typography>
            </Paper>
            <Box sx={{ display: 'flex' }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flexGrow: 1 }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  )
};