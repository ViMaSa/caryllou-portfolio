import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Portfolio from "./portfolioComponent";

test('portfolio page render and navigation', async () => {
  const { user } = renderWithRouter(<Portfolio />);
  expect(screen.getByText(/Digital Journal/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Digital Journal/i));
  expect(screen.getByText(/This is a passion project that documents 2021/i)).toBeInTheDocument();
});

test('redirecting to a bad page', () => {
  const badRoute = '/some/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <Portfolio />
    </MemoryRouter>
  )

  expect(screen.getByText(/Nothing to see here!/i)).toBeInTheDocument();
})
