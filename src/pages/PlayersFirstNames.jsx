import { map, range } from "ramda";
import Title from "../components/Title";
import ButtonLink from "../formComponents/ButtonLink";
import { useForm } from "react-hook-form";

const PlayersFirstNames = ({ gameHandler }) => {
  const { playersNumber } = gameHandler;

  const { handleSubmit, register } = useForm()
  const onSubmit = (data) => {
    console.log("data", data)
  }

  return (
    <form className="players-firstnames">
      <Title title={"Quels sont les prénoms des joueurs ?"} />
      { map(
        playerIndex => {
          return <div key={playerIndex} className="player-firstname">
            <div className="player-firstname-label">Joueur {playerIndex}</div>
            <input 
              className="player-firstname-input"
              {...register(`joueur${playerIndex}`)}
            />
          </div>
        }
      )(range(1, playersNumber + 1))}
      <ButtonLink label={"Jouez !"} onClick={handleSubmit(onSubmit)}/>
    </form>
  )
}

export default PlayersFirstNames