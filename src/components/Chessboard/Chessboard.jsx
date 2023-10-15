import "../../scss/main.css";

import React, { useState } from "react";
const pieceContext = require.context("../../assets/pieces", false, /\.(png)$/);

const initialBoard = [
  ["br60", "bn60", "bb60", "bq60", "bk60", "bb60", "bn60", "br60"],
  ["bp60", "bp60", "bp60", "bp60", "bp60", "bp60", "bp60", "bp60"],
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  ["wp60", "wp60", "wp60", "wp60", "wp60", "wp60", "wp60", "wp60"],
  ["wr60", "wn60", "wb60", "wq60", "wk60", "wb60", "wn60", "wr60"],
];

const pieceImages = pieceContext.keys().reduce((images, path) => {
  const key = path.match(/\.\/(.*)\.png/)[1];
  images[key] = pieceContext(path);
  return images;
}, {});

const Chessboard = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const squares = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const isLightSquare = (i + j) % 2 === 0;
      const piece = initialBoard[i][j];
      const squareKey = `square-${i}-${j}`;

      squares.push(
        <div
          key={squareKey}
          className={`square ${isLightSquare ? "light" : "dark"}`}
        >
          {piece && (
            <img src={pieceImages[piece]} alt={piece} className="chess-piece" />
          )}
        </div>
      );
    }
  }

  return <div className="chessboard">{squares}</div>;
};

export default Chessboard;
