import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, it } from 'vitest';

it('renders the bills management heading', () => {
  render(<App />);
  expect(screen.getByText(/bills management/i)).toBeInTheDocument();
});
