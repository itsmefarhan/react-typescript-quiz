import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

import { Simulate } from "react-dom/test-utils";

// test('renders Expense Tracker in App Component', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Expense Tracker/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/React TypeScript Quiz App/i)).toBeInTheDocument();
  });
});

it("button", () => {
  const { getByText } = render(<App />);
  const startQuiz = getByText("Start");

  fireEvent.click(startQuiz);
});

// it("check whether button is disabled when input fields are empty", () => {
//   const { getByTestId } = render(<AddTransaction />);
//   const addBtn = getByTestId("testbtn");
//   expect(addBtn).toBeDisabled();
// });

// it("check whether button is enabled when input fields are not empty", () => {
//   const { getByTestId } = render(<AddTransaction />);
//   const addBtn = getByTestId("testbtn");

//   const textEl = getByTestId("text");
//   const amountEl = getByTestId("amount");

//   fireEvent.change(textEl, { target: { value: "this is test" } });
//   fireEvent.change(amountEl, { target: { value: "11" } });
//   expect(addBtn).toBeEnabled();
// });

// it("check whether button is clicked", () => {
//   const onSubmit = jest.fn();
//   const { getByTestId } = render(<AddTransaction />);
//   const textEl = getByTestId("text");
//   const amountEl = getByTestId("amount");

//   fireEvent.change(textEl, { target: { value: "this is test" } });
//   fireEvent.change(amountEl, { target: { value: "11" } });

//   fireEvent.click(getByTestId('form'));
//   expect(onSubmit).toBeCalled();
// });

// it("check whether balance heading has class text-light", () => {
//   const { getByTestId } = render(<Balance />);
//   const total = getByTestId("total");
//   expect(total).toHaveClass("text-light");
// });
