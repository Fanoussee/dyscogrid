const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">DyscoGrid - Triominos</h1>
      <div className="home-welcome">
        <h2 className="home-welcome-title">Bienvenue sur Dyscogrid</h2>
      </div>
      <button className="button" onClick={() => console.log("j'ai cliqué !")}>Commencer une partie</button>
    </div>
  )
}

export default Home