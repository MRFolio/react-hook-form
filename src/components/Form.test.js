import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, within } from '@testing-library/react';
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
    expect(input).toHaveValue('Hire me');
  });

  it('Surname input renders properly', () => {
    const input = screen.getByLabelText('Surname:');
    expect(input).toBeTruthy();
    expect(input).toBeInTheDocument();
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
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeTruthy;
  });

  it('correct button className', () => {
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveClass('submitButton');
  });

  it('incorrect button className', () => {
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).not.toHaveClass('tere');
  });
});

describe('button', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('button has button attribute', () => {
    const button = screen.getByRole('button', { name: /submit/i });

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

describe('textbox tests', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('userinput to be empty at first', () => {
    const box = screen.getByTestId('textbox');
    expect(box).toBeEmptyDOMElement();
    expect(box).toBeInTheDocument();
  });

  it('userinput should be shown correctly in text area', () => {
    const box = screen.getByTestId('textbox');
    userEvent.type(box, 'Hello,{enter}World!');
    expect(box).toHaveValue('Hello,\nWorld!');
  });

  it('userinput should have 3 empty spaces after user input', () => {
    const box = screen.getByTestId('textbox');
    userEvent.type(box, 'Hello,{space}{space}{space}World!');
    expect(box).toHaveValue('Hello,   World!');
  });

  it('userinput should have 3 empty spaces and no exclamation mark after user input', () => {
    const box = screen.getByTestId('textbox');
    userEvent.type(box, 'Hello,{space}{space}{space}World!{backspace}');
    expect(box).toHaveValue('Hello,   World');
    expect(box).not.toHaveValue('Hello,   World!');
    expect(box).toHaveAttribute('type', 'submit');
  });

  it('textarea should have correct class', () => {
    const box = screen.getByTestId('textbox');
    expect(box).toHaveClass('tere');
    expect(box).not.toHaveClass('tere2');
  });

  it('should paste text input', () => {
    const box = screen.getByTestId('textbox');
    const text = 'Hello, world!';
    userEvent.paste(box, text);
    expect(box).toHaveValue(text);
  });

  it('textarea should have correct class2', () => {
    const box = screen.getByLabelText('Type something');
    expect(box).toHaveClass('tere');
    expect(box).not.toHaveClass('tere2');
  });

  it('textarea should not have focus', () => {
    const element = screen.getByLabelText('Type something');
    expect(element).not.toHaveFocus();
  });
});

describe('fruitlist', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('should correctly render list', () => {
    const list = screen.getByRole('list', { name: /fruits/i });
    expect(list).toBeInTheDocument();
  });

  it('list length should be 5', () => {
    const list = screen.getByRole('list', { name: /fruits/i });
    const { getAllByRole } = within(list);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(5);
    expect(listItems.length).not.toBe(0);
    expect(listItems.length).not.toBe(6);
  });

  it('should render correct fruit names', () => {
    const list = screen.getByRole('list', { name: /fruits/i });
    const { getAllByRole } = within(list);
    const listItems = getAllByRole('listitem');
    const fruitNames = listItems.map((fruit) => fruit.textContent);
    const realFruits = [
      'Bananas',
      'Apples',
      'Strawberries',
      'Grapes',
      'Oranges',
    ];

    expect(fruitNames).toEqual(realFruits);
    expect(fruitNames.includes('Grapes')).toBeTruthy();
    expect(fruitNames.includes('tere3')).toBeFalsy();
    expect(listItems).not.toEqual(['tere', 'kaks']);
  });
});

describe('async tests', async () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('multiple async calls test', async () => {
    const asyncMock = jest
      .fn()
      .mockResolvedValue('default')
      .mockResolvedValueOnce('first call')
      .mockResolvedValueOnce('second call');

    await asyncMock(); // first call
    await asyncMock(); // second call
    await asyncMock(); // default
    await asyncMock(); // default

    expect(asyncMock).toBeCalledTimes(4);
  });

  it('async test resolve', async () => {
    const asyncMock = jest.fn().mockResolvedValue('success');

    await expect(asyncMock()).resolves.toBe('success');
    await expect(asyncMock()).resolves.not.toBe('success2');
    expect(asyncMock).toBeCalledTimes(2);
    expect(asyncMock).toBeCalledWith();
    expect(asyncMock).toHaveBeenLastCalledWith();
    expect(asyncMock).not.toBeCalledWith('tere');
  });

  it('async reject test', async () => {
    const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));

    await expect(asyncMock()).rejects.toThrow('Async error');
  });
});
