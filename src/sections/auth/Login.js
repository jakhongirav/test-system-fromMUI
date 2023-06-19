// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
//
import AuthLoginForm from './AuthLoginForm';
// import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();


  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative', padding: {xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2} }} >
        <Typography variant="h4">Tizimga Kirish</Typography>
        <Typography variant="p">Toshkent Xalqaro moliyaviy boshqaruv va texnologiyalar universiteti</Typography>

        {/* Registration */}

        {/* <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link variant="subtitle2">Create an account</Link>
        </Stack> */}


        {/* Mini logo unnecessary */}

        {/* <Tooltip title='Good luck!' placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: "60%", top: -14 }}
          />
        </Tooltip> */}
      </Stack>

      {/* <Alert severity="info" sx={{ mb: 3 }}>
        Use email : <strong>abdusamad@gmail.com</strong> / password :<strong>dem o1234</strong>
      </Alert> */}

      <AuthLoginForm />


    {/* Social Networks links */}
      {/* <AuthWithSocial /> */}
    </LoginLayout>
  );
}
