import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Typography, Button } from '@mui/material';
// auth
import { useAuthContext } from '../auth/useAuthContext';
// _mock_

import CustomBreadcrumbs from '../components/custom-breadcrumbs/CustomBreadcrumbs';

import { PATH_DASHBOARD } from '../routes/paths';

// components
import { useSettingsContext } from '../components/settings';
import Image from '../components/image';
// sections
import Statistics from '../sections/@dashboard/statistics/Statistics';
import RoleBasedGuard from '../auth/RoleBasedGuard';
// assets
// import userIcon from '../../public/assets/icons/dashboard/user-icon.svg'
// import privilegeIcon from '../../public/assets/icons/dashboard/privilege-icon.svg'
// import fullTimeIcon from '../../public/assets/icons/dashboard/fullTime-icon.svg'
// import partTimeIcon from '../../public/assets/icons/dashboard/partTime-icon.svg'

// ----------------------------------------------------------------------

export default function GeneralStatisticsPage() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();


  return (
    <>
     <RoleBasedGuard roles={['admin']}>

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

      <Helmet>
        <title> TIFT | Statistics</title>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack direction='column' sx={{
          borderRadius: '6px',
          boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
        }}>
          <Stack direction='column' spacing={1} alignItems='center' justifyContent='center' sx={{
            padding: '80px',
          }}>
            <Typography variant='h3' sx={{
              color: 'textPrimary',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '44px',
            }}>25.12.2023 / 09:00</Typography>
            <Typography variant='subtitle1' sx={{
              color: 'textPrimary',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: '22px',
            }}>Imtihon topshirish sanasi / vaqti!</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{
            maxHeight: '274px',
            padding: '30px 80px',
            background: 'var(--light-opacity-color-primary-primary-8, rgba(115, 103, 240, 0.08))',
          }}>
            <Stack direction='column' spacing={7}>
              <Stack direction='column' spacing={2}>
                <Typography variant='h3' sx={{
                  color: 'var(--light-solid-color-primary-primary-500-base, #7367F0)',
                  fontSize: '26px',
                  fontWeight: 600,
                  lineHeight: '36px',
                  maxWidth: '700px'
                }}>Assalomu alaykum! Hurmatli abiturient siz imtihonni topshirishingiz mumkin. Omad!</Typography>
                <Typography variant='subtitle1' sx={{
                  fontSize: '17px',
                  fontWeight: 400,
                  lineHeight: '22px',
                 }}>Imtihon belgilangan vaqtda tugaydi! Iltimos diqqatli bo’ling.</Typography>
              </Stack>
                <Button
                  to='stats/startertest'
                  variant='contained'sx={{
                  borderRadius: '6px',
                  background: 'var(--light-solid-color-primary-primary-500-base, #7367F0)',
                  boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
                  padding: '10px 20px',
                  maxWidth: '150px',
                  }}>
                    Testni boshlash
                </Button>
              </Stack>
              <Stack direction='row'>
                <Image
                 disabledEffect
                 visibleByDefault
                 alt="auth"
                 src='/assets/laptopGirl.png'
                 sx={{ maxWidth: 273 }}
                />
              </Stack>
          </Stack>
        </Stack>
      </Container> 
      </RoleBasedGuard>

       <RoleBasedGuard roles={['student']}>

      <Helmet>
        <title> TIFT | Statistics</title>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Helmet>

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

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Statistics
              title="Jami qabul"
              total={21459}
              icon='/assets/icons/dashboard/stats/user-icon.svg'
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Statistics
              title="Imtiyozga ega"
              total={459}
              icon='/assets/icons/dashboard/stats/privilege-icon.svg'
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Statistics
              title="Kunduzgi"
              total={14567}
              icon='/assets/icons/dashboard/stats/fullTime-icon.svg'
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Statistics
              title="Sirtqi"
              total={1860}
              icon='/assets/icons/dashboard/stats/partTime-icon.svg'
            />
          </Grid>
        </Grid>
      </Container>
      </RoleBasedGuard>

    </>
  );
}
