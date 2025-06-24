import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
    primary: { main: '#1976d2' },
    secondary: { main: '#A8C7FA' },
    action: {
      selected: '#e3e8fd', // light blue for selection in light mode
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1F1F1F',
      paper: '#222',
    },
    text: {
      primary: '#fff',
      secondary: '#bbb',
    },
    primary: { main: '#90caf9' },
    secondary: { main: '#A8C7FA' },
    action: {
      selected: '#232b3b',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export function getTheme(mode: 'light' | 'dark') {
  return mode === 'dark' ? darkTheme : lightTheme;
}
