import Title from "../components/Title"
import Button from "../formComponents/Button"

const PlayersNumber = ({ gameHandler }) => {
  const { setPlayersNumber } = gameHandler;

  return (
    <>
      <Title title={"Combien y-a-t-il de joueurs ?"} />
      <div className="group-buttons">
        <Button label={"1 joueur"} onClick={() => setPlayersNumber(1)} />
        <Button label={"2 joueurs"} onClick={() => setPlayersNumber(2)} />
        <Button label={"3 joueurs"} onClick={() => setPlayersNumber(3)} />
        <Button label={"4 joueurs"} onClick={() => setPlayersNumber(4)} />
      </div>
    </>
  )
}

export default PlayersNumber