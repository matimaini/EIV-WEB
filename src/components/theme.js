import { createTheme } from '@mui/system';

const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#36a9df',

    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    },
    secondary: {
      main: '#e0dadc',
    },
    background: {
      default: '#36a9df',
      paper: '#373C46',
    },
    error: {
      main: '#ff6459',
    },
    text: {
      primary: '#36a9df',
      secondary: '#ffffff',
    },
  },
  typography: {
    overline: {
      fontFamily: '"Montserrat"',
    },
    button: {

      fontWeight: 600,
      lineHeight: 1.9,
      fontSize: '1rem',
    },
    h1: {
      fontFamily: '"Montserrat"',
    },
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

});

export default Theme