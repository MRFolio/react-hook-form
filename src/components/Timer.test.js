import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('', () => {
  beforeEach(() => {
    render(<Timer />);
    // jest.useFakeTimers();
  });

  //   afterEach(() => {
  //     jest.runOnlyPendingTimers();
  //     jest.useRealTimers();
  //   });

  it('should render timer', () => {
    const paragraph = screen.getByText(/3/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('3:00');
    setTimeout(() => {
      expect(paragraph).toHaveTextContent(/2/i);
    }, 1000);

    expect(paragraph).not.toContain('3:00');
  });
});
