import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from '@testing-library/react';
import Result from './Result';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve('overcast'),
  })
);

describe('Form tests', () => {
  //   beforeEach(() => {
  //     render(<Result />);
  //   });

  it('fetch properly', async () => {
    await act(() => render(<Result />));
    expect(screen.getByText('overcast')).toBeInTheDocument();
    // expect.assertions(1);
    // const data = await getInfo();
    // expect(data.base).toEqual('stations');
    // const paragraph = screen.getByTestId('para');
    // expect(paragraph).toHaveTextContent('overcast clouds');
    // expect(paragraph).not.toBeEmptyDOMElement();
    // expect(paragraph).toBeInTheDocument();
  });

  it('content exists', () => {
    render(<Result />);
    const fileContent = screen.getByText(/filecontent text:/i);
    expect(fileContent).toBeVisible();
    expect(fileContent).not.toBeEmptyDOMElement();
    expect(fileContent).toBeInTheDocument();
  });
});
