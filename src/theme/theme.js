import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: '#FFFFFF'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root :{
              ":hover": {
                color: '#01404F',
                backgroundColor: '#DFF5FF'
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#FFFFFF'
          }
        }
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: '#FFFFFF'
          }
        }
      },
      MuiAutocomplete: {
          styleOverrides: {
              listbox: {
                  backgroundColor:'#373c46',
              },
          }
      },
      MuiFab: {
          styleOverrides: {
              root: {
                  ":hover": {
                      color: 'black'
                  }
              }
          }
      }
    },
    palette: {
      type: 'light',
      primary: {
        main: '#36a9df',
      },
      secondary: {
        main: '#FFFFFF',
      },
      background: {
        paper: '#373c46',
        default: '#969494',
      },
      text: {
        primary: '#ffffff',
        secondary: '#000000',
      },
    },
  });

theme.typography.h4 = {
    fontSize: '2rem',
    '@media(max-width: 640px)': {
      fontSize: '1.75rem'
    }
}

theme.typography.h6 = {
    fontSize: '1.5rem',
    '@media(max-width: 640px)': {
      fontSize: '1rem'
    }
}

export default theme