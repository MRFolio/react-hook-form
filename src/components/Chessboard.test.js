import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chessboard from './Chessboard';

describe('chessboard', () => {
  beforeEach(() => {
    render(<Chessboard />);
  });

  it('should render button with correct text', () => {
    const button = screen.getByRole('button', {
      name: /resign/i,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Resign');
    expect(button).not.toHaveTextContent('Game over');
  });

  it('button click event', () => {
    const button = screen.getByRole('button', { name: /resign/i });
    userEvent.click(button);
    expect(button).toHaveTextContent('Game over');
    expect(
      screen.queryByRole('button', { name: /resign/i })
    ).not.toBeInTheDocument();
  });

  it('player names should be displayed correctly', () => {
    const users = screen.getAllByText(/alihanturgut/i);
    const expectedNames = ['alihanturgut', 'alihanturgut'];
    const usersNames = users.map((user) => user.textContent);
    expect(usersNames).toEqual(expectedNames);
    expect(users.length).toBe(2);
    expect(users.length).not.toBe(1);
    expect(users.length).not.toBe(3);
    expect(users[0]).toBeInTheDocument();
    expect(users[1]).toBeInTheDocument();
  });
});
