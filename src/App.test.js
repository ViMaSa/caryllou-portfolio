import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

window.scrollTo = jest.fn();

test('full app rendering/navigation', async () => {
  const { user } = renderWithRouter(<App />);

  // Verify page content for default route
  expect(screen.getByText(/caryl lou paayas/i)).toBeInTheDocument();

  // Verify page content for expected route after navigating
  await user.click(screen.getByText(/caryl lou paayas/i));
  expect(screen.getByText(/Digital Journal/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';

  // Use <MemoryRouter> to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByText(/Nothing to see here!/i)).toBeInTheDocument()
});
