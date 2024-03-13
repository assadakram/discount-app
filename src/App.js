import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RadioSelection from './components/RadioSelection';
import DiscountCodeEntry from './components/DiscountCodeEntry';
import GenerateDiscountButton from './components/GenerateDiscountButton';
import NoteField from './components/NoteField';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Discount Code App
            </Typography>
            <Box my={2}>
              <Typography variant="h6">Select an Option</Typography>
              <RadioSelection />
            </Box>
            <Box my={2}>
              <Typography variant="h6">Enter a Discount Code</Typography>
              <DiscountCodeEntry />
            </Box>
            <Box my={2}>
              <Typography variant="h6">Generate a Discount Code</Typography>
              <GenerateDiscountButton />
            </Box>
            <Box my={2}>
              <Typography variant="h6">Notes</Typography>
              <NoteField />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
  );
}

export default App;
