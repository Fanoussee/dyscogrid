import { map, range } from "ramda";
import Title from "../components/Title";
import ButtonLink from "../formComponents/ButtonLink";
import { useForm } from "react-hook-form";
import RoutesPathEnum from "../enums/RoutesPathEnum";
import FormInput from "../formComponents/FormInput";

const PlayersFirstNames = ({ gameHandler }) => {
  const { playersNumber, setPlayersFirstNames } = gameHandler;

  const { register, watch } = useForm()

  return (
    <form className="players-firstnames">
      <Title title={"Quels sont les prénoms des joueurs ?"} />
      { map(
        playerIndex => {
          return <FormInput 
            key={playerIndex}
            label={`Joueur ${playerIndex}`}
            register={register(`joueur${playerIndex}`)}
          />
        }
      )(range(1, playersNumber + 1))}
      <ButtonLink 
        label={"Jouez !"}
        onClick={() => setPlayersFirstNames(watch())}
        href={RoutesPathEnum.gameTurn}
      />
    </form>
  )
}

export default PlayersFirstNames