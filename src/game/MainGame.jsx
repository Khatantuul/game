import React, { useState, useRef } from "react";
import Board from "./Board";
import Coin from "./Coin";
import "./mainStyle.css";
import { helperCounter } from "./helperFunc";

function MainGame() {
  let height = 6;
  let width = 7;
  const [redIsNext, setRedIsNext] = useState(true);
  const [currentBoard, setCurrentBoard] = useState(
    Array(width * height).fill(null)
  );
  const [winner, setWinner] = useState("");
  const tieRef = useRef(0);

  const calcWinner = (newState, row, col) => {
    let colToCheck = [];
    for (let i = height - 1; i >= 0; i--) {
      const pos = i * width + col;
      colToCheck.push(newState[pos]);
    }

    let rowToCheck = [];
    for (let j = 0; j < width; j++) {
      const pos = row * width + j;
      rowToCheck.push(newState[pos]);
    }

    let diagonal1 = [];
    for (let i = -3; i <= 3; i++) {
      const newRow = row + i;
      const newCol = col + i;
      if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width) {
        const pos = newRow * width + newCol;
        diagonal1.push(newState[pos]);
      }
    }

    let diagonal2 = [];
    for (let i = -3; i <= 3; i++) {
      const newRow = row + i;
      const newCol = col - i;
      if (newRow >= 0 && newRow < height && newCol > 0 && newCol < width) {
        const pos = newRow * width + newCol;
        diagonal2.push(newState[pos]);
      }
    }

    const verticalWinner = helperCounter(colToCheck); //so then its wiether null or winner
    const horizontalWinner = helperCounter(rowToCheck);
    const diagonal1Winner = helperCounter(diagonal1);
    const diagonal2Winner = helperCounter(diagonal2);
    return (
      verticalWinner || horizontalWinner || diagonal1Winner || diagonal2Winner
    );
  };

  const handleClick = (col) => {
    if (winner) return;
    tieRef.current++;
    if (tieRef.current === currentBoard.length) {
      setWinner("Tie");
      return;
    }
    for (let row = height - 1; row >= 0; row--) {
      //so now row is att the bottom
      //we have our col so to determine our coin position
      const idx = row * width + col;
      if (!currentBoard[idx]) {
        //if nothings there to begin with
        const newBoardState = [...currentBoard];
        newBoardState[idx] = redIsNext ? "R" : "Y";
        setCurrentBoard(newBoardState);
        const winChar = calcWinner(newBoardState, row, col);
        console.log(winChar);
        if (winChar) {
          setWinner(winChar);
        } else {
          setRedIsNext(!redIsNext);
        }
        break;
      }
    }
  };

  return (
    <div className="main">
      <h2>Game</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Next Player</p>
        <Coin color={redIsNext ? "R" : "Y"} />
      </div>
      <Board
        width={width}
        height={height}
        boardstate={currentBoard}
        onMove={handleClick}
      />
      {winner && (
        <h1>
          And the winner is:{" "}
          {winner === "R"
            ? "Red Player"
            : winner === "Y"
            ? "Yellow Player"
            : "Tie"}
        </h1>
      )}
    </div>
  );
}

export default MainGame;
