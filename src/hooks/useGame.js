import { useState } from "react";

const useGame = () => {
  const [playersNumber, setPlayersNumber] = useState(0);
  return {
    gameHandler: {
      playersNumber,
      setPlayersNumber
    }
  }
}

export default useGame;
