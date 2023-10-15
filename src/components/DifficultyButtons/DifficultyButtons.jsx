import "../../scss/main.css";

import Button from "@mui/material/Button";
import React from "react";

const DifficultyButtons = ({
  onSelectDifficulty,
  selectedDifficulty,
  setSelectedDifficulty,
}) => {
  const handleButtonClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
    onSelectDifficulty(difficulty);
  };

  const difficulties = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <div className="difficulty-buttons">
      {difficulties.map((level) => (
        <Button
          variant="contained"
          key={level}
          className={selectedDifficulty === level ? "active" : ""}
          onClick={() => handleButtonClick(level)}
        >
          {level}
        </Button>
      ))}
    </div>
  );
};

export default DifficultyButtons;
