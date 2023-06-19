import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link } from '@mui/material';
// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, small = false, sx, ...other }, ref) => {
  const logoSmall = (
    <Box
      component="img"
      src="/logo/mini-logo.svg"
      sx={{ width: 43, height: 40, cursor: 'pointer', ...sx }}
    />
  );

  if (small) return logoSmall;

  const logo = (
    <Box
      component="img"
      src="/logo/logo.svg"
      sx={{ width: 156, height: 69, cursor: 'pointer', ...sx }}
    />
  );

  if (disabledLink) return logo;

  return (
    <Link component={RouterLink} to="/dashboard" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  small: PropTypes.bool,
  disabledLink: PropTypes.bool,
};

export default Logo;
