import React from "react";
import DifficultyButtons from "../DifficultyButtons/DifficultyButtons";
import "./DifficultySelector.css";

const DifficultySelector = ({ onSelectDifficulty }) => {
  return (
    <div className="difficulty-selector">
      <DifficultyButtons onSelectDifficulty={onSelectDifficulty} />
    </div>
  );
};

export default DifficultySelector;
