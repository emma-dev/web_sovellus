import { render, screen } from '@testing-library/react';
import WebSovellusJSApp from './App';
import App from './App';

test('renders learn react link', () => {
  render(<WebSovellusJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
