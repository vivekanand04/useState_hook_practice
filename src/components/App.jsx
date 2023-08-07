import React, { useState } from "react";

function App() {
  setInterval(upDate, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function upDate() {
    const tree = new Date().toLocaleTimeString();
    setTime(tree);
  }
  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={upDate}>Get Time</button>
    </div>
  );
}

export default App;
