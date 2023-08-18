import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutUs /> },
    ],
  },
]);

export default router;
