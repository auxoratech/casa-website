import { createHashRouter } from "react-router";
import App from "@src/App";
import Home from "@src/pages/home";
import About from "@src/pages/about";
import Services from "@src/pages/services";
import ErrorPage from "@src/pages/error";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
