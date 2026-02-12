import { createHashRouter } from "react-router";
import App from "@src/App";
import Home from "@src/pages/home";
import About from "@src/pages/about";
import Services from "@src/pages/services";
import ErrorPage from "@src/pages/error";
import joinUs from "./pages/joinUs";
import Contact from "./pages/contact";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "join", Component: joinUs },
      { path: "contact", Component: Contact },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
