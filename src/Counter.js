import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <h1>Simple Counter</h1>
      <button className="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button className="button" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>

      <h2>Counter: {counter}</h2>
    </div>
  );
}
export default Counter;
