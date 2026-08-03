import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('opens auth menu when register button is clicked', async () => {
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: /зареєструватись/i }));

  expect(screen.getByText(/создайте аккаунт/i)).toBeInTheDocument();
});
