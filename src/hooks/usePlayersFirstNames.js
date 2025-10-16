import { all, map } from "ramda";
import { isFalse, isNilOrEmpty } from "ramda-adjunct";
import { useState } from "react";
import RoutesPathEnum from "../enums/RoutesPathEnum";

const usePlayersFirstNames = (watch, playersIndexes) => {
  const [playersFirstNames, setPlayersFirstNames] = useState();

  const onValidatePlayersFirstNames = (navigate) => () => {
    const errors = map(
      playerNumber => {
        const playerFirstName = watch(`joueur${playerNumber}`)
        return isNilOrEmpty(playerFirstName)
      }
    )(playersIndexes)
    const hasPlayers = all(isFalse, errors);
    if (hasPlayers) {
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