import React from "react";
import Chessboard from "./components/Chessboard/Chessboard";
import ResetButton from "./components/ResetButton/ResetButton";
import DifficultySelector from "./components/DifficultySelector/DifficultySelector";
import "./App.css";

const App = () => {
  const handleSelectDifficulty = (elo) => {
    console.log(`Selected ELO: ${elo}`);
  };

  const handleResetGame = () => {
    console.log("TODO - Game Reset");
  };

  return (
    <div className="App">
      <DifficultySelector onSelectDifficulty={handleSelectDifficulty} />
      <Chessboard />
      <ResetButton onReset={handleResetGame} />
    </div>
  );
};

export default App;
