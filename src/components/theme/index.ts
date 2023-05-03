import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#0C1021',
      paper: '#1B213B',
    },
    primary: {
      main: '#FFBF00',
    },
    secondary: {
      main: '#FE5F55',
    },
    success: {
      main: '#06D6A0',
    },
    info: {
      main: '#118DF0',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFBF00',
    },
  },
  typography: {
    fontFamily: '"Droid Sans", "Roboto","Helvetica","Arial",sans-serif',
  },
});
