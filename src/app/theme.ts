import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e0e0e0',
      main: '#1976d2',
      dark: '#494949',
    },
    secondary: {
      light: 'orange',
      main: '#5101bb',
    },
    text: {
      primary: '#292929',
      secondary: '#e0e0e0',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
