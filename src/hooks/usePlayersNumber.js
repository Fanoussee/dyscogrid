import { range } from "ramda";
import { useState } from "react";

const usePlayersNumber = () => {
  const [playersNumber, setPlayersNumber] = useState(0);
  const possiblePlayersNumber = range(1, 5);
  const playersIndexes = range(1, playersNumber + 1);

  return {
    playersNumber,
    setPlayersNumber,
    possiblePlayersNumber,
    playersIndexes
  }
}

export default usePlayersNumber