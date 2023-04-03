// import the Counter component here
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const messageElement = screen.getByText(/Counter/i);
  expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  //render(<Counter />);
  const incrementButton = screen.getByText("+");
  const countElement = screen.getByTestId("count");

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe("1");

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe("2");
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText("-");
  const countElement = screen.getByTestId("count");

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe("-1");

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe("-2");
});
