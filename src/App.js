import React from "react";
import "./App.css";
import Chessboard from "./components/Chessboard";
import ELOSelector from "./components/ELOSelector";
import ResetButton from "./components/ResetButton";

function App() {
  const handleELOSelect = (elo) => {
    console.log(`Selected ELO: ${elo}`);
  };

  const handleReset = () => {
    console.log("TODO - Game Reset");
  };

  return (
    <div className="App">
      <h1>Play Chess</h1>
      <ELOSelector onSelectELO={handleELOSelect} />
      <Chessboard />
      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default App;
