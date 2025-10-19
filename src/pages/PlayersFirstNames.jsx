import { map, prop } from "ramda";
import Title from "../components/Title";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const PlayersFirstNames = ({ gameHandler }) => {
  const { playersIndexes, register, handleSubmit, errors, onValidatePlayersFirstNames } = gameHandler;
  const navigate = useNavigate();

return (
    <form className="players-firstnames" onSubmit={handleSubmit(onValidatePlayersFirstNames(navigate))}>
      <Title title={"Quels sont les prénoms des joueurs ?"} />
      {map(
        playerIndex => {
          return <div key={playerIndex} className="player-input">
            <FormInput
              label={`Joueur ${playerIndex}`}
              register={register(`joueur${playerIndex}`, {required: true})}
            />
            {prop(`joueur${playerIndex}`)(errors) && <p className="error-message">Ce champ est requis</p>}
          </div>
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