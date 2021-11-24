import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const dashboardText = screen.getAllByText(/Dashboard/i)[0];
  expect(dashboardText).toBeInTheDocument();
});
