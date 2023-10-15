import React, { useState } from "react";
import Chessboard from "./components/Chessboard/Chessboard";
import MainContainer from "./components/MainContainer/MainContainer";
import DifficultySelector from "./components/DifficultySelector/DifficultySelector";

import "./scss/main.css";

const App = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleSelectDifficulty = (elo) => {
    console.log(`Selected ELO: ${elo}`);
    setSelectedDifficulty(elo);
  };

  return (
    <MainContainer>
      <div className="app">
        <Chessboard selectedDifficulty={selectedDifficulty} />
        <DifficultySelector
          onSelectDifficulty={handleSelectDifficulty}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
      </div>
    </MainContainer>
  );
};

export default App;
