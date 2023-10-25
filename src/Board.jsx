import React from "react";
import { useGameContext } from "./GameContext";
import "./Board.css"; 
function Board() {
  const { squares, nextValue, setSquares, setNextValue } = useGameContext();

  // Function to handle square selection
  const selectSquare = (square) => {
    if (squares[square] || calculateWinner(squares)) {
      return;
    }
    const newSquares = [...squares];
    newSquares[square] = nextValue;
    setSquares(newSquares);
    setNextValue(calculateNextValue(newSquares));
  };

  // Function to handle game restart
  const restart = () => {
    setSquares(Array(9).fill(null));
    setNextValue("X");
  };

  // Function to calculate the winner of the game
  const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
  };

  // Function to calculate the game status
const calculateStatus = (winner, nextValue) => {
    if (winner) {
      return `Winner: ${winner}`;
    }
    if (squares.every(Boolean)) {
      return `Scratch: Cat's game`;
    }
    return `Next player: ${nextValue}`;
  };

  // Function to calculate the next value ('X' or 'O')
  function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
  }

  return (
    <div className="custom-container">
      <div>
        <div className="status font-bold text-xl mb-4">
          Status: {calculateStatus(calculateWinner(squares), nextValue)}
        </div>
        <div className="custom-grid">
          {squares.map((value, index) => (
            <button
              key={index}
              className="button"
              onClick={() => selectSquare(index)}
            >
              {value}
            </button>
          ))}
        </div>
        <button className="restart-button" onClick={restart}>
            Restart
        </button>
      </div>
    </div>
  );
}

export default Board;