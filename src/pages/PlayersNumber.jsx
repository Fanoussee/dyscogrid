import { map } from "ramda";
import Title from "../components/Title"
import Button from "../components/Button"
import RoutesPathEnum from "../enums/RoutesPathEnum";
import { useNavigate } from "react-router-dom";

const PlayersNumber = ({ gameHandler }) => {
  const { setPlayersNumber, possiblePlayersNumber } = gameHandler;

  const navigate = useNavigate();

  return (
    <>
      <Title title={"Combien y-a-t-il de joueurs ?"} />
      <div className="group-buttons">
        {map(
          playerNumber => <Button
            key={playerNumber}
            label={`${playerNumber} joueur${playerNumber > 1 ? "s" : ""}`}
            onClick={() => {
              setPlayersNumber(playerNumber);
              navigate(RoutesPathEnum.playersFirstNames)
            }}
          />
        )(possiblePlayersNumber)}
      </div>
    </>
  )
}

export default PlayersNumber