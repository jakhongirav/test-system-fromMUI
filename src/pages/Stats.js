import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button } from '@mui/material';
// auth
import { useAuthContext } from '../auth/useAuthContext';
// _mock_

// components
import { useSettingsContext } from '../components/settings';
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

      <Helmet>
        <title> TIFT | Statistics</title>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        {/* Student Main page here */}
      </Container>
      </RoleBasedGuard>

       <RoleBasedGuard roles={['student']}>

      <Helmet>
        <title> TIFT | Statistics</title>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Helmet>

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
