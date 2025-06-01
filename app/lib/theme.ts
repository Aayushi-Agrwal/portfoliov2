import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1F1F1F',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
