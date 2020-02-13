import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const wrapper= rtl.render(<App />);
  const TestingElement = wrapper.getByText(/Testing Title/i);
  expect(TestingElement).toBeInTheDocument();
  expect(TestingElement).toBeTruthy();
});

rtl.fireEvent.click(theButton)
describe("increments", () => {
  it("can increment the count by clicking on the increment", () => {
    const tools = rtl.render(<Button />);
    const incButton = tools.queryByTestId("one");
    let elementWithZero = tools.queryByText(/0/);
    expect(elementWithZero).toBeInTheDocument();

    rtl.fireEvent.click(incButton);

    const elementWithTwo = twrapper.queryByText(/2/);
    expect(elementWithZero).not.toBeInTheDocument();
    expect(elementWithTwo).toBeInTheDocument();
  });
});
