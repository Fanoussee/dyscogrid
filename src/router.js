import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import PlayersNumber from "./components/PlayersNumber";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/nombre-joueurs",
    element: <PlayersNumber />
  },
  {
    path: "/*",
    element: <div>
      error
    </div>
  }
]);

export default router;