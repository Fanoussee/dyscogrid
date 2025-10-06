import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import PlayersNumber from "./PlayersNumber"
import Layout from "../components/Layout"
import RoutesPathEnum from "../enums/RoutesPathEnum"
import useGame from "../hooks/useGame"
import PlayersFirstNames from "./PlayersFirstNames"
import GameTurn from "./GameTurn"

const App = () => {
  const {gameHandler} = useGame();

  return (
    <div>
      <BrowserRouter basename='/dyscogrid'>
      <Layout>
        <Routes>
          <Route exact path={RoutesPathEnum.origin} element={<Home />}></Route>
          <Route 
            path={RoutesPathEnum.playersNumber}
            element={<PlayersNumber gameHandler={gameHandler} />}
          ></Route>
          <Route 
            path={RoutesPathEnum.playersFirstNames}
            element={<PlayersFirstNames gameHandler={gameHandler} />}
          ></Route>
          <Route 
            path={RoutesPathEnum.gameTurn}
            element={<GameTurn gameHandler={gameHandler} />}
          ></Route>
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App