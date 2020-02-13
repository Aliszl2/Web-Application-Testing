import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";


afterEach(rtl.cleanup);

test('sanity test', () => {
  const wrapper = rtl.render(<span className='scoreboard'>Total</span>)
  const scoreBoardHeader = wrapper.queryByText(/Total/i)
  expect(scoreBoardHeader).toBeInTheDocument()
})

describe("Display",()=>{
  it("renders without crashing", () => {
    const wrapper = rtl.render(<Display />);
        wrapper.debug()
  });
  



})

