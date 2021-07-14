import { createMuiTheme } from '@material-ui/core';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e84723'
    },
    secondary: {
      main: '#17a2b8'
    }
  },
  typography,
  overrides: {
    MuiButton: {
      root: {
          textTransform: 'none'
      }
    },
    MuiPopover: {
      root: {
        minWidth: 100
      },
      paper: {
        minWidth: 100,
        minHeight: 32
      }
    },
  }
});

export default theme;
