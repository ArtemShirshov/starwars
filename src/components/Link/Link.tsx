import React, { FC, ReactElement } from 'react';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface ILink {
  children: ReactElement | string;
  href: string;
}

export const Link: FC<ILink> = ({ children, href }) => {
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
