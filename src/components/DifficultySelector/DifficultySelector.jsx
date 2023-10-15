import React from "react";
import DifficultyButtons from "../DifficultyButtons/DifficultyButtons";

import "../../scss/main.css";

const DifficultySelector = ({
  onSelectDifficulty,
  selectedDifficulty,
  setSelectedDifficulty,
}) => {
  return (
    <div className="difficulty-selector">
      <DifficultyButtons
        onSelectDifficulty={onSelectDifficulty}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
    </div>
  );
};

export default DifficultySelector;
