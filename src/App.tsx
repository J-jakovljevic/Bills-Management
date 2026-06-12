import { Box, Container, Stack, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box minHeight="100vh" py={{ xs: 4, md: 8 }}>
        <Container maxWidth="md">
          <Stack spacing={3}>
            <Typography component="h1" variant="h3" fontWeight={700}>
              Bills Management
            </Typography>

            <Typography color="text.secondary">
              A React + TypeScript foundation with Material UI, ESLint and Prettier
            </Typography>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
