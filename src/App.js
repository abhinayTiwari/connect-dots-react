import React from "react";
import "./App.css";
import Board from "../src/components/Board";

function App() {
  return (
    <div className="App">
      <Board columns="7" rows="6" />
    </div>
  );
}

export default App;
