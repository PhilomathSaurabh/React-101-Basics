import "./App.css";
import React, { useState } from "react";

// This is a functional component
function App() {
  const [count, setcount] = useState(0);

  const increament = () => {
    console.log("Adding");
    setcount(count + 1);
  };

  const decreament = () => {
    console.log("sub");
    setcount(count - 1);
  };

  return (
    <div className="app">
      <h1>React Basics</h1>

      <h3>Creating a plus and - Button</h3>
      <p>Value of counter is : {count}</p>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  );
}

export default App;
