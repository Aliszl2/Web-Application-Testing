import React from "react";
import App from "../App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);
describe;
it("renders without crashing", () => {
  // ready to test!
  const wrapper = rtl.render(<Display />);
});

// it("returns something ", () => {
//   expect(setHomescore(homeScore).toBeDefined());
//   //   expect(setHomescore(homeScore(()).toBeTruthy();
// });
