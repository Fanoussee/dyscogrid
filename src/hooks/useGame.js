import { useEffect, useState } from "react";
import { add, append, compose, defaultTo, map, range, reduce } from 'ramda'
import { useForm } from "react-hook-form";
import usePlayersNumber from "./usePlayersNumber";
import usePlayersFirstNames from "./usePlayersFirstNames";

const useGame = () => {
  const { register, setValue, watch, reset, handleSubmit, formState: { errors, isValid } } = useForm();
  const { playersNumber, setPlayersNumber, possiblePlayersNumber, playersIndexes } = usePlayersNumber();
  const { playersFirstNames, onValidatePlayersFirstNames } = usePlayersFirstNames(watch, isValid);
  const [scores, setScores] = useState([]);
  
  const piochesIndexes = range(1, 5);

  const getPointsPioche = (playerIndex) => map(
    piocheIndex => {
      const piochePoints = watch(`joueur${playerIndex}.pioche${piocheIndex}`)
      return defaultTo(0, piochePoints);
    }
  );

  const getTotal = (playerIndex) => {
    const actualScore = scores[playerIndex - 1];
    const points = Number(watch(`joueur${playerIndex}.points`));
    const pointsPioches = getPointsPioche(playerIndex)(piochesIndexes);
    return compose(
      reduce(add, 0),
      append(points),
      append(actualScore)
    )(pointsPioches);
  }

  const getScores = () => {
    const scoresUpdated = map(getTotal)(playersIndexes);
    setScores(scoresUpdated);
    reset()
  }

  useEffect(() => {
    const scores = map(
      () => 0
    )(playersIndexes)
    setScores(scores);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersNumber])

  return {
    gameHandler: {
      playersNumber,
      playersIndexes,
      setPlayersNumber,
      possiblePlayersNumber,
      playersFirstNames,
      register,
      setValue,
      watch,
      errors,
      handleSubmit,
      getScores,
      onValidatePlayersFirstNames
    }
  }
}

export default useGame;
