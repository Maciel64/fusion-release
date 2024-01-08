import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FusionExperience from "./pages/FusionExperience";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fusionExperience",
    element: <FusionExperience />,
  },
]);

export default routes;
