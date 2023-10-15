// App.jsx

import React, { useState } from "react";
import Chessboard from "./components/Chessboard/Chessboard";
import DifficultySelector from "./components/DifficultySelector/DifficultySelector";
import ResetButton from "./components/ResetButton/ResetButton";

const App = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleSelectDifficulty = (elo) => {
    console.log(`Selected ELO: ${elo}`);
    setSelectedDifficulty(elo);
  };

  const handleResetGame = () => {
    console.log("TODO - Game Reset");
  };

  return (
    <div className="App">
      <DifficultySelector
        onSelectDifficulty={handleSelectDifficulty}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
      <ResetButton onReset={handleResetGame} />
      <Chessboard selectedDifficulty={selectedDifficulty} />
    </div>
  );
};

export default App;
