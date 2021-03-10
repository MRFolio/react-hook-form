import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form tests', () => {
  it('firstName input renders properly', () => {
    render(<Form />);
    const input = screen.getByLabelText('First name:');
    expect(input).toBeTruthy;
  });

  it('Surname input renders properly', () => {
    render(<Form />);
    const input = screen.getByLabelText('Surname:');
    expect(input).toBeTruthy;
  });

  it('button renders properly', () => {
    render(<Form />);
    const button = screen.getByRole('button', { type: 'button' });
    expect(button).toBeTruthy;
  });

  it('correct button className', () => {
    render(<Form />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('submitButton');
  });

  it('incorrect button className', () => {
    render(<Form />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('tere');
  });
});

describe('input value', () => {
  it('updates on change', () => {
    render(<Form />);
    const surnameInput = screen.queryByPlaceHolderText('Enter surname...');
    fireEvent.change(surnameInput, { target: { value: 'Bird' } });
    expect(surnameInput.value).toBe('Bird');
  });
});

describe('Stack', () => {
  let stack = ['1', '2'];

  beforeEach(() => {
    stack.push('3');
  });

  it('length should be 3', () => {
    expect(stack).toHaveLength(3);
  });

  it('should have 3 added to stack', () => {
    expect(stack).toEqual(['1', '2', '3', '3']);
  });
});
