import React, { useState } from "react";
import Display from "./components/Display";
import "./App.css";


function App() {
  //state
  const [total, setTotal] = useState(0);
  
  const incrementBy1 = () => {
    if (total <= 1000) {
      setTotal(total + 1);
    } else {
      setTotal(0);
    }
    return total;
  };
  const incrementBy10 = () => {
    if (total <= 1000) {
      setTotal(total + 10);
    } else {
      setTotal(0);
    }
    return total;
  };
  const incrementBy100 = () => {
    if (total <= 1000) {
      setTotal(total + 100);
    } else {
      setTotal(0);
    }
    return total;
  };
  const reset = () => {
    setTotal(0);
    return total;
  };
  return (
    <div>
      <h1>Testing Title</h1>
      <Display
        total={total}
        setTotal={setTotal}
        incrementBy1={incrementBy1}
        incrementBy10={incrementBy10}
        incrementBy100={incrementBy100}
        reset={reset}
      />
    </div>
  );
}

export default App;
