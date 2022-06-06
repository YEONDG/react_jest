import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// Suites 그룹화
describe('Greeting componenet', () => {
  test('renders Hello World ad a text', () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);
    // Act
    //...nothing

    // Assert
    const outputElement = screen.getByText("It's good", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    //Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render It's good if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("It's good", { exact: false });
    expect(outputElement).toBeNull();
  });
});
