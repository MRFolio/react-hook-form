import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chessboard from './Chessboard';
import Timer from './Timer';

// jest.mock('./Timer', () => () => <div data-testid="timer" />);

jest.mock('./Timer', () => ({
  Timer: jest.fn(() => <p data-testid="test">3:00</p>),
}));
// jest.mock("./Timer", ()=> ()=> <div data-testid="timer"/>)
// jest.mock('./Timer', () => ({
//   Timer: jest.fn(() => <div data-testid="timer" />),
// }));
// jest.mock('./Timer', () => ({
//   Timer: jest.fn(() => <div data-testid="timer" />),
// }));

describe('chessboard', () => {
  beforeEach(() => {
    render(<Chessboard />);
  });

  it('renders a Timer', () => {
    const pausedFirst = true;
    render(<Timer paused={pausedFirst} />);
    const timer = getByTestId('timer');

    expect(timer).toBeInTheDocument();
    expect(timer).toHaveTextContent(/3:00/i);
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
    expect(button).not.toBeDisabled();
    userEvent.click(button);
    expect(button).toHaveTextContent('Game over');
    expect(
      screen.queryByRole('button', { name: /resign/i })
    ).not.toBeInTheDocument();
    expect(button).toBeDisabled();
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

  it('heading to show properly when hovered and dissapear when unhovered', () => {
    const playerName = screen.getAllByText(/alihanturgut/i)[0];
    const heading = screen.queryByRole('heading', { name: /tere3/i });
    expect(heading).not.toBeInTheDocument();
    userEvent.hover(playerName);
    const hoverHeading = screen.getByRole('heading', { name: /tere3/i });
    expect(hoverHeading).toBeInTheDocument();
    expect(hoverHeading).toBeTruthy();
    userEvent.unhover(playerName);
    expect(
      screen.queryByRole('heading', { name: /tere3/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /tere3/i })).toBeFalsy();
  });
});
