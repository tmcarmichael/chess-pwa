import React from "react";

const ELOSelector = ({ onSelectELO }) => {
  return (
    <div>
      <label>Select Opponent Strength: </label>
      <select onChange={(e) => onSelectELO(e.target.value)}>
        <option value="500">Beginner</option>
        <option value="1000">Intermediate</option>
        <option value="1500">Advanced</option>
        <option value="2000">Expert</option>
      </select>
    </div>
  );
};

export default ELOSelector;
