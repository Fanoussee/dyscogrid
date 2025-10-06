import { useState } from "react";
import { range } from 'ramda'
const useGame = () => {
  const [playersNumber, setPlayersNumber] = useState(0);
  const possiblePlayersNumber = range(1, 5);

  return {
    gameHandler: {
      playersNumber,
      setPlayersNumber,
      possiblePlayersNumber
    }
  }
}

export default useGame;
