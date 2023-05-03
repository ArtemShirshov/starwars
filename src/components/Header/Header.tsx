import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from './Star_Wars_Logo.svg';

export const Header = () => {
  return (
    <Box textAlign="center">
      <Link to="/">
        <Logo />
      </Link>
    </Box>
  );
};
