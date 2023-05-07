import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { Home } from 'pages/Home';
import { theme } from 'components/theme';
import { store } from 'store/store';

import './App.css';
import { Character } from './pages/Character';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box
          // sx={(theme) => ({
          //   background: theme.palette.background.default,
          // })}
          >
            <Layout>
              <Routes>
                <Route element={<Home />} index />
                <Route element={<Character />} path="character/:id" />
              </Routes>
            </Layout>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
