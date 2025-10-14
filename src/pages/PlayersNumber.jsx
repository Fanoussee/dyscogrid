import { map } from "ramda";
import Title from "../components/Title"
import ButtonLink from "../components/ButtonLink"
import RoutesPathEnum from "../enums/RoutesPathEnum";

const PlayersNumber = ({ gameHandler }) => {
  const { setPlayersNumber, possiblePlayersNumber } = gameHandler;

  return (
    <>
      <Title title={"Combien y-a-t-il de joueurs ?"} />
      <div className="group-buttons">
        { map(
          playerNumber => <ButtonLink
            key={playerNumber}
            label={`${playerNumber} joueur${playerNumber > 1 ? "s" : ""}`} 
            onClick={() => setPlayersNumber(playerNumber)}
            href={RoutesPathEnum.playersFirstNames}
          />
        )(possiblePlayersNumber) }
      </div>
    </>
  )
}

export default PlayersNumber