import React from 'react';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Link = ({ children, href }: any) => {
  return (
    <RouterLink
      style={{
        textDecoration: 'none',
        height: '100%',
      }}
      to={href}
    >
      <Typography color="primary">{children}</Typography>
    </RouterLink>
  );
};
