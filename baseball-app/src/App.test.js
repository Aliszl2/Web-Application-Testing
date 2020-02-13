import React from 'react';
import * as rtl from "@testing-library/react";
import App from './App';

test('renders learn react link', () => {
  const { getByText } = rtl.render(<App />);
  const TestingElement = getByText(/Testing/i);
  expect(TestingElement).toBeInTheDocument();
});
