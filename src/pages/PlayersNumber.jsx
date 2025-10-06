import { map } from "ramda";
import Title from "../components/Title"
import ButtonLink from "../formComponents/ButtonLink"

const PlayersNumber = ({ gameHandler }) => {
  const { setPlayersNumber, possiblePlayersNumber } = gameHandler;

  return (
    <>
      <Title title={"Combien y-a-t-il de joueurs ?"} />
      <div className="group-buttons">
        { map(
          playerNumber => <ButtonLink 
            label={`${playerNumber} joueur${playerNumber > 1 ? "s" : ""}`} 
            onClick={() => setPlayersNumber(playerNumber)}
          />
        )(possiblePlayersNumber) }
      </div>
    </>
  )
}

export default PlayersNumber