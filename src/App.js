import React from "react";
import Board from "./Board";
import { GameProvider } from "./GameContext";



function App() {
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  );
}

export default App;
