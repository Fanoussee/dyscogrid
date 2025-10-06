import { useEffect, useState } from "react";
import { add, append, compose, defaultTo, map, range, reduce } from 'ramda'
import { useForm } from "react-hook-form";

const useGame = () => {
  const [playersNumber, setPlayersNumber] = useState(0);
  const possiblePlayersNumber = range(1, 5);
  const [playersFirstNames, setPlayersFirstNames] = useState();
  const [scores, setScores] = useState([]);
  
  const { register, setValue, watch, reset } = useForm();

  const playersIndexes = range(1, playersNumber + 1);
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
      setPlayersNumber,
      possiblePlayersNumber,
      playersFirstNames,
      setPlayersFirstNames,
      register,
      setValue,
      watch,
      getScores
    }
  }
}

export default useGame;
