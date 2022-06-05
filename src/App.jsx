import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Home } from './Home';

export function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });

  // const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </>
  )
}

