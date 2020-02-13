import React, { useState } from "react";
export default function Display() {
  const [total, setTotal] = useState(0);

  return (
    // total display
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Total</h2>

            <div className="home__score">{total}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
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
            className="homeButtons__fieldGoal"
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
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setTotal(total+ 100)}
          >
            Increment by 100
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setTotal(0)}
          >
           Reset
          </button>
          <br />
        </div>
      </section>
    </div>
  );
}
