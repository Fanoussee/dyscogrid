import RoutesPathEnum from "../enums/RoutesPathEnum"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="home">Bienvenue sur la grille de scores du Triomino</h2>
      <Button
        label={"Commencer la partie"}
        onClick={() => navigate(RoutesPathEnum.playersNumber)}
      />
    </>
  )
}

export default Home