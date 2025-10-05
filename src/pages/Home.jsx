import RoutesPathEnum from "../enums/RoutesPathEnum"
import Button from "../formComponents/Button"

const Home = () => {
  return (
      <>
        <h2 className="home">Bienvenue sur Dyscogrid</h2>
        <Button label={"Commencer la partie"} href={RoutesPathEnum.playersNumber} />
      </>
  )
}

export default Home