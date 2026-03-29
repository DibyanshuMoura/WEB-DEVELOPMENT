import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <h2>{count}</h2>
      <div className="buttonContainer">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
