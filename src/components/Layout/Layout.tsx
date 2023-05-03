import React from 'react';
import { Container } from '@mui/material';
import { Header } from '../Header/Header';

export const Layout = ({ children }: any) => {
  return (
    <Container>
      <Header />

      {children}
    </Container>
  );
};
