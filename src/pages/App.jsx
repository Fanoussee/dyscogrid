import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import PlayersNumber from "./PlayersNumber"
import Layout from "../components/Layout"

const App = () => {
  return (
    <div>
      <BrowserRouter basename='/dyscogrid'>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/nombre-joueurs" element={<PlayersNumber />}></Route>
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App