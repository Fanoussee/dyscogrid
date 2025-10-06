import { useState } from "react";
import { range } from 'ramda'
const useGame = () => {
  const [playersNumber, setPlayersNumber] = useState(0);
  const possiblePlayersNumber = range(1, 5);
  const [playersFirstNames, setPlayersFirstNames] = useState();
  const [gameTurn, setGameTurn] = useState(1);

  return {
    gameHandler: {
      playersNumber,
      setPlayersNumber,
      possiblePlayersNumber,
      playersFirstNames,
      setPlayersFirstNames,
      gameTurn,
      setGameTurn
    }
  }
}

export default useGame;
