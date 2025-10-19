import { useState } from "react";
import RoutesPathEnum from "../enums/RoutesPathEnum";

const usePlayersFirstNames = (watch, isValid) => {
  const [playersFirstNames, setPlayersFirstNames] = useState();

  const onValidatePlayersFirstNames = (navigate) => () => {
    if (isValid) {
      setPlayersFirstNames(watch());
      navigate(RoutesPathEnum.gameTurn)
    }
  }

  return {
    playersFirstNames,
    onValidatePlayersFirstNames
  }

}

export default usePlayersFirstNames