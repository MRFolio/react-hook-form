import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form tests', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('firstName input renders properly', () => {
    const input = screen.getByLabelText('First name:');
    expect(input).toBeTruthy;
  });

  it('firstName user input change firstName', () => {
    const input = screen.getByLabelText('First name:');
    userEvent.type(input, 'Hello, World!');
    expect(input).toHaveValue('Hello, World!');
  });

  it('firstName user input change with not matching input values', () => {
    const input = screen.getByLabelText('Surname:');
    userEvent.type(input, 'Hire me');
    expect(input).not.toHaveValue('Hello, World!');
  });

  it('Surname input renders properly', () => {
    const input = screen.getByLabelText('Surname:');
    expect(input).toBeTruthy;
  });

  it('Surname user input change', () => {
    const input = screen.getByLabelText('Surname:');
    userEvent.type(input, 'Hello, World!');
    expect(input).toHaveValue('Hello, World!');
  });

  it('Surname user input change with not matching input values', () => {
    const input = screen.getByLabelText('Surname:');
    userEvent.type(input, 'tere');
    expect(input).not.toHaveValue('Hello, World!');
  });

  it('button renders properly', () => {
    const button = screen.getByRole('button', { type: 'button' });
    expect(button).toBeTruthy;
  });

  it('correct button className', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveClass('submitButton');
  });

  it('incorrect button className', () => {
    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('tere');
  });
});

describe('button', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('button has button attribute', () => {
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
    expect(button).not.toHaveAttribute('type', 'button');
  });
});

describe('checkbox checked', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('checkbox not checked', () => {
    const inputCheckbox = screen.getByRole('checkbox');
    expect(inputCheckbox).not.toBeChecked();
  });

  it('doubleClick leaves checkbox unchecked', () => {
    // const inputCheckbox = screen.getByLabelText(
    //   'Do you wish to subscribe to the newsletter?'
    // );
    const inputCheckbox = screen.getByRole('checkbox');
    userEvent.dblClick(inputCheckbox);
    expect(inputCheckbox).not.toBeChecked();
  });

  it('click leaves checkbox checked', () => {
    const inputCheckbox = screen.getByRole('checkbox');
    fireEvent.click(inputCheckbox);
    expect(inputCheckbox).toBeChecked();
  });
});

describe('checkbox not to be required', () => {
  it('checkbox not to be required', () => {
    render(<Form />);
    expect(screen.queryByRole('checkbox')).not.toBeRequired();
  });
});

describe('svg renders properly', () => {
  it('svg visible', () => {
    render(<Form />);
    const htmlElement = screen.getByTestId('html-element');
    expect(htmlElement).toBeVisible();
    expect(htmlElement).not.toBeEmptyDOMElement();
    expect(screen.getByTestId('svg-element')).toBeVisible();
  });
});

describe('Stack', () => {
  let stack = ['1', '2'];

  beforeEach(() => {
    stack.push('3');
  });

  // afterEach(cleanup);
  afterEach(() => {
    stack.pop();
  });

  it('length should be 3', () => {
    expect(stack).toHaveLength(3);
  });

  it('should have 3 added to stack', () => {
    expect(stack).toEqual(['1', '2', '3']);
  });
});
