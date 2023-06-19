import PropTypes, { string } from 'prop-types';
// @mui
// import { alpha } from '@mui/material/styles';
import { Box, Card, Typography, Stack } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../../../utils/formatNumber';
// components
// import Iconify from '../../../../components/iconify';
// import Chart, { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

StudentStatsCard.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  icon: PropTypes.node,
};

export default function StudentStatsCard({ title, total, icon, sx, ...other }) {

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2, ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle3" color='grey' paragraph>
          {title}
        </Typography>

        <Typography variant="h4" gutterBottom>
          {fNumber(total)}
        </Typography>

        <Typography variant='subtitle5' color='grey'>2023</Typography>
      </Box>

    {/* Here Icon */}
      <Box>
        <img src={icon} alt='icon'/>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------
