import { map, prop, range } from "ramda";
import { useForm } from "react-hook-form";
import GameTurnPlayer from "../components/GameTurnPlayer";
import Figures from "../components/Figures";
import ButtonLink from "../formComponents/ButtonLink";

const GameTurn = ({ gameHandler }) => {
  const { playersFirstNames, playersNumber, gameTurn, setGameTurn } = gameHandler;
  
  const { register, setValue } = useForm();

  return (
    <form>
      <Figures />
      {
        map(
          playerIndex => {
            const playeurFirstNameFound = prop(`joueur${playerIndex}`)(playersFirstNames);

            return <div className="separator" key={playerIndex}>
              <GameTurnPlayer 
                playerFirstName={playeurFirstNameFound}
                playerIndex={playerIndex}
                register={register}
                setValue={setValue}
              />
            </div>
          }
        )(range(1, playersNumber + 1))
      }
      <div className="game-turn-button">
        <ButtonLink label={"Tour suivant"} onClick={() => setGameTurn(gameTurn + 1)} />
      </div>
    </form>
  )
}

export default GameTurn