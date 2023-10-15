import React from "react";
import "./DifficultyButtons.css";

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
        <button
          key={level}
          className={selectedDifficulty === level ? "active" : ""}
          onClick={() => handleButtonClick(level)}
        >
          {level}
        </button>
      ))}
    </div>
  );
};

export default DifficultyButtons;
