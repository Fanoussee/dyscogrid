import Button from "../formComponents/Button"

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">DyscoGrid - Triominos</h1>
      <h2 className="home-welcome">Bienvenue sur Dyscogrid</h2>
      <Button label={"Commencer la partie"} href={"/nombre-joueurs"} />
    </div>
  )
}

export default Home