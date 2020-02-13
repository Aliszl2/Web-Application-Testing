import React, { useState } from "react";
export default function Display() {
  const [total, setTotal] = useState(0);

  return (
    // total display
    <div className="container">
      <section className="scoreboard">
        <div className="orange">
          <div className="totalandscore">
            <h2 className="total">Total</h2>

            <div className="score">{total}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <button
          className="one"
          onClick={() => {
            if (total <= 50) {
              setTotal(total + 1);
            } else {
              setTotal(0);
            }
          }}
        >
          Increment by 1
        </button>
        <button
          className="ten"
          onClick={() => {
            if (total <= 100000) {
              setTotal(total + 10);
            } else {
              setTotal(0);
            }
          }}
        >
          Increment by 10
        </button>
        <button className="ten" onClick={() => setTotal(total + 100)}>
          Increment by 100
        </button>
        <button className="hundred" onClick={() => setTotal(0)}>
          Reset
        </button>
        <br />
      </section>
    </div>
  );
}
