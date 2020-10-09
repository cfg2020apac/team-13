import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white,
      other: colors.grey[300]
    },
    primary: {
      main: colors.common.white
    },
    secondary: {
      main: colors.indigo[900]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      other: colors.grey[500]
    },
    card: {
      main: colors.teal[300]
    },
    program: {
      main: colors.grey[500]
    }
  },
  shadows,
  typography
});

export default theme;
