import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import FusionExperience from "./pages/FusionExperience";
import StartUpsEvent from "./pages/StartUpsEvent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fusionExperience",
    element: <FusionExperience />,
  },
  {
    path: "/startUpsEvent",
    element: <StartUpsEvent />,
  },
]);

export default routes;
