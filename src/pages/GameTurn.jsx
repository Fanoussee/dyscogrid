import { map, prop, range } from "ramda";
import GameTurnPlayer from "../components/GameTurnPlayer";
import ButtonLink from "../components/ButtonLink";

const GameTurn = ({ gameHandler }) => {
  const { playersFirstNames, playersNumber, getScores, register, setValue, watch } = gameHandler;
  
  return (
    <form>
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
                watch={watch}
              />
            </div>
          }
        )(range(1, playersNumber + 1))
      }
      <div className="game-turn-button">
        <ButtonLink 
          label={"Tour suivant"}
          onClick={getScores}
        />
      </div>
    </form>
  )
}

export default GameTurn;
