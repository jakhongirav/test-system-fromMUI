import { Helmet } from 'react-helmet-async';

import { Box, Container } from '@mui/material';

import React from 'react';

import CustomBreadcrumbs from '../components/custom-breadcrumbs';

import { PATH_DASHBOARD } from '../routes/paths';

import StudentStats from '../sections/@dashboard/results/studentStats/StudentStats';
import StudentList from '../sections/@dashboard/results/studentList/StudentList';

function Results() {
  return (
    <>
      <Helmet>
        <title> TIFT | Statistics</title>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Helmet>
      <CustomBreadcrumbs
        heading="Results"
        sx={{
          p: '0 24px'
        }}
        links={[
          {
            name: 'Dashboard',
            href: PATH_DASHBOARD.root,
          },
          {
            name: 'Results',
          },
        ]}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '26px'
      }}>
        <StudentStats />
        <StudentList />
      </Box>
    </>
  );
}

export default Results;
