import React,{useState} from 'react';
import { CssBaseline, Container,ThemeProvider, createTheme, Button, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Sidebar />
        <Box display="flex" justifyContent="flex-end" padding={2}>
          <Button variant="contained" onClick={handleThemeChange}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Theme
          </Button>
        </Box>
        <Container style={{ marginTop: '20px', marginLeft: '20px', flexGrow: 1 }}>
          <Dashboard />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
