import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import React, { useState } from "react";
import Chessboard from "./components/Chessboard/Chessboard";
import DifficultySelector from "./components/DifficultySelector/DifficultySelector";

const App = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleSelectDifficulty = (elo) => {
    console.log(`Selected ELO: ${elo}`);
    setSelectedDifficulty(elo);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DifficultySelector
          onSelectDifficulty={handleSelectDifficulty}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />
        <Chessboard selectedDifficulty={selectedDifficulty} />
      </div>
    </ThemeProvider>
  );
};

export default App;
