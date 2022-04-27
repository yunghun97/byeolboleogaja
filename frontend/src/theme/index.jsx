import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 730,
      md: 970,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#13275a',
    },
    secondary: {
      main: '#64678e',
    },
  },
});

export default function ThemeConfig({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
