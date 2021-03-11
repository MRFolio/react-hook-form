import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
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

describe('button', () => {
  it('button has button attribute', () => {
    render(<Form />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).not.toHaveAttribute('type', 'button');
  });
});

describe('svg render', () => {
  it('svg visible', () => {
    render(<Form />);
    expect(screen.getByTestId('html-element')).toBeVisible();
    expect(screen.getByTestId('html-element')).not.toBeEmptyDOMElement();
    expect(screen.getByTestId('svg-element')).toBeVisible();
  });
  it('checkbox not checked', () => {
    render(<Form />);
    const inputCheckboxUnchecked = screen.getByLabelText(
      'Do you wish to subscribe to the newsletter?'
    );
    expect(inputCheckboxUnchecked).not.toBeChecked();
  });
});

describe('checkbox not to be required', () => {
  it('checkbox not to be required', () => {
    render(<Form />);
    expect(screen.queryByRole('checkbox')).not.toBeRequired();
  });
});

describe('Stack', () => {
  let stack = ['1', '2'];

  beforeEach(() => {
    stack.push('3');
  });

  afterEach(() => {
    // cleanup on exiting
    stack.pop();
  });

  it('length should be 3', () => {
    expect(stack).toHaveLength(3);
  });

  it('should have 3 added to stack', () => {
    expect(stack).toEqual(['1', '2', '3']);
  });
});
