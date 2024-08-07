import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/perfil", element: <Perfil />,
  }
]);