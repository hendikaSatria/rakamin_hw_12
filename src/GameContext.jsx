import React, { createContext, useContext, useState } from "react";

// Create a context
const GameContext = createContext();

// Create a context provider component
export function GameProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextValue, setNextValue] = useState("X");

  const value = {
    squares,
    nextValue,
    setSquares,
    setNextValue,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  return useContext(GameContext);
}
