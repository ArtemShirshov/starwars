import React, { FC, ReactElement } from 'react';
import { Container } from '@mui/material';

import { Header } from 'components/Header/Header';

interface ILayout {
  children: ReactElement;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Container>
      <Header />

      {children}
    </Container>
  );
};
