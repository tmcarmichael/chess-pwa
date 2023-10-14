import React from "react";
import "./ResetButton.css";

const ResetButton = ({ onReset }) => {
  return (
    <div className="reset-button">
      <button onClick={onReset}>Restart</button>
    </div>
  );
};

export default ResetButton;
