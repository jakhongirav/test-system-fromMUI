// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Box} from '@mui/material';

// auth
import { useAuthContext } from '../../../../auth/useAuthContext';
// _mock_

// components
import { useSettingsContext } from '../../../../components/settings';
// sections
import Statistics from './StudentStatsCard';

// ----------------------------------------------------------------------

export default function StudentStats() {
  const { user } = useAuthContext();

  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Container maxWidth={themeStretch ? false : 'xl'}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.4}>
              <Statistics
                title="Grantlar"
                total={65}
                icon="/assets/icons/dashboard/studentStats/scholar-icon.svg"
              />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Statistics
                title="Kontraktlar"
                total={1300}
                icon="/assets/icons/dashboard/studentStats/contract-icon.svg"
              />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Statistics
                title="Yiqilganlar"
                total={12567}
                icon="/assets/icons/dashboard/studentStats/fails-icon.svg"
              />
            </Grid>
            <Grid item xs={12} md={2.4}>
              <Statistics
                title="Imtiyozlar"
                total={160}
                icon="/assets/icons/dashboard/studentStats/privilege-icon.svg"
              />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <Statistics
                title="Kelmaganlar"
                total={12}
                icon="/assets/icons/dashboard/studentStats/absend-icon.svg"
              />
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
