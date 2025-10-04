import Button from "../formComponents/Button"

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">DyscoGrid - Triominos</h1>
      <div className="home-welcome">
        <h2 className="home-welcome-title">Bienvenue sur Dyscogrid</h2>
      </div>
      <Button label={"Commencer la partie"} href={"/nombre-joueurs"} />
    </div>
  )
}

export default Home