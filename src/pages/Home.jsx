import RoutesPathEnum from "../enums/RoutesPathEnum"
import ButtonLink from "../components/ButtonLink"

const Home = () => {
  return (
      <>
        <h2 className="home">Bienvenue sur la grille de scores du Triomino</h2>
        <ButtonLink label={"Commencer la partie"} href={RoutesPathEnum.playersNumber} />
      </>
  )
}

export default Home