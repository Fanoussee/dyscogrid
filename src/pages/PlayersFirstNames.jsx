import { map } from "ramda";
import Title from "../components/Title";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const PlayersFirstNames = ({ gameHandler }) => {
  const { playersIndexes, register, handleSubmit, onValidatePlayersFirstNames } = gameHandler;
  const navigate = useNavigate();

  return (
    <form className="players-firstnames" onSubmit={handleSubmit(onValidatePlayersFirstNames(navigate))}>
      <Title title={"Quels sont les prénoms des joueurs ?"} />
      {map(
        playerIndex => {
          return <FormInput
            key={playerIndex}
            label={`Joueur ${playerIndex}`}
            register={register(`joueur${playerIndex}`)}
          />
        }
      )(playersIndexes)}
      <Button
        label={"Jouez !"}
        type={"submit"}
      />
    </form>
  )
}

export default PlayersFirstNames