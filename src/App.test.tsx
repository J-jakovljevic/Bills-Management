import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { expect, it, vi, beforeEach } from 'vitest';
import App from '@/App';
import { BillStatus, BillType } from '@models/billModel';
import { getBillsApi } from '@/services/api/billApi';

vi.mock('./services/api/billApi', () => ({
  getBillsApi: vi.fn(),
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getBillsApi).mockResolvedValue([]);
});

it('renders the bills management heading', () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );

  expect(screen.getByText(/bills management/i)).toBeInTheDocument();
});

it('renders bill information from the API in a table', async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  vi.mocked(getBillsApi).mockResolvedValue([
    {
      billNo: 'Bill 1/2024',
      billType: BillType.Government,
      billStatus: BillStatus.Current,
      sponsor: 'Private Members',
      title: 'A test bill for demonstration',
    },
  ]);

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );

  expect(await screen.findByText('Bill 1/2024')).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'Bill number' })).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'Bill type' })).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'Bill status' })).toBeInTheDocument();
  expect(screen.getByRole('columnheader', { name: 'Sponsor' })).toBeInTheDocument();
});
