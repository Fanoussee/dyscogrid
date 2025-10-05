import RoutesPathEnum from "../enums/RoutesPathEnum"
import ButtonLink from "../formComponents/ButtonLink"

const Home = () => {
  return (
      <>
        <h2 className="home">Bienvenue sur Dyscogrid</h2>
        <ButtonLink label={"Commencer la partie"} href={RoutesPathEnum.playersNumber} />
      </>
  )
}

export default Home