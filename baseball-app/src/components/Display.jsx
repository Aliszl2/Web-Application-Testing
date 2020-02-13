import React, { useState } from "react";


export default function Display({incrementBy1, incrementBy10, incrementBy100, reset, total, setTotal}) {

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
          onClick={incrementBy1}
        >
          Increment by 1
        </button>
        <button
          className="ten"
          onClick={incrementBy10}
        >
          Increment by 10
        </button>
        <button className="ten" onClick={incrementBy100}>
          Increment by 100
        </button>
        <button className="hundred" onClick={reset}>
          Reset
        </button>
        <br />
      </section>
    </div>
  );
}
