import React from "react";
import "./Chessboard.css";

const Chessboard = () => {
  const squares = Array(64)
    .fill(null)
    .map((_, i) => {
      const isLightSquare = (Math.floor(i / 8) + i) % 2 === 0;
      return (
        <div key={i} className={`square ${isLightSquare ? "light" : "dark"}`} />
      );
    });

  return <div className="chessboard">{squares}</div>;
};

export default Chessboard;
