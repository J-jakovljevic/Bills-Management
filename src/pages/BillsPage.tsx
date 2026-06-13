import { Alert, Box, Container, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import type { Bill } from '@models/billModel';
import BillsTable from '@/components/billsTable/BillsTable';
import BillsTableSkeleton from '@/components/skeleton/BillsTableSkeleton';
import { getBillsApi } from '@/services/api/billApi';

const BillsPage = () => {
  const {
    data: bills,
    isLoading,
    error,
  } = useQuery<Bill[], Error>({
    queryKey: ['bills'],
    queryFn: () => getBillsApi(),
  });

  return (
    <Box
      minHeight="100vh"
      py={{ xs: 2.5, sm: 3, md: 6 }}
      sx={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
        <Stack spacing={{ xs: 2, sm: 3 }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}
            fontWeight={700}
          >
            Bills Management
          </Typography>

          {isLoading && <BillsTableSkeleton />}

          {error && (
            <Alert severity="error">
              {error instanceof Error ? error.message : 'Unable to load bills'}
            </Alert>
          )}

          {!isLoading && !error && bills?.length === 0 && (
            <Alert severity="info">No bills were returned by the API.</Alert>
          )}

          {!isLoading && !error && bills && bills.length > 0 && <BillsTable bills={bills} />}
        </Stack>
      </Container>
    </Box>
  );
};

export default BillsPage;
