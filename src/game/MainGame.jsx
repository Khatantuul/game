import React, { useState } from "react";
import Board from "./Board";
import Coin from "./Coin";

function helperCounter(arr){
    let prev = null;
    let winChar = null;
    let count = 0;
    for (let val of arr) {
        if (val && val === prev) {
            count++;
          if (count === 4) {
            winChar = val;
            console.log("winning??", val);
            return winChar;
          }
        } else {
            count = 1;
          prev = val;
        }
      }
    return null;
}

function MainGame() {
  let height = 5;
  let width = 5;
  const [redIsNext, setRedIsNext] = useState(true);
  const [currentBoard, setCurrentBoard] = useState(
    Array(width * height).fill(null)
  );
  const [winner, setWinner] = useState("");

  const calcWinner = (newState, row, col) => {
    // let winner = '';
    let colToCheck = [];
    for (let i = height - 1; i >= 0; i--) {
      const pos = i * width + col;
      colToCheck.push(newState[pos]);
    }
    
    let rowToCheck = [];
    for(let j=0; j <width; j++){
        const pos = row * width + j;
        rowToCheck.push(newState[pos])
    }

     const verticalWinner = helperCounter(colToCheck)//so then its wiether null or winner
     const horizontalWinner = helperCounter(rowToCheck)
     return verticalWinner || horizontalWinner
  };

  const handleClick = (col) => {
    if (winner) return;

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
    <div>
      <h2>Game</h2>
      <div style={{ display: "flex" }}>
        <p>Next Player</p>
        <Coin color={redIsNext ? "R" : "Y"} />
      </div>
      <Board
        width={width}
        height={height}
        redIsNext={redIsNext}
        boardstate={currentBoard}
        onMove={handleClick}
      />
      {winner && 
      <h1>And the winner is : {winner}</h1>
    }
    </div>
  );
}

export default MainGame;
