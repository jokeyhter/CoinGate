// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinGate title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinGate/i);
    expect(titleElement).toBeInTheDocument();
});
