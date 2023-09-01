import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Captains from "./pages/Captains";
import Engineering from "./pages/Engineering";
import SocialImpact from "./pages/SocialImpact";
import Go from "./pages/Go";
import Eat from "./pages/Eat";
import Delivery from "./pages/Delivery";
import Get from "./pages/Get";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "captains", element: <Captains /> },
      { path: "engineering-at-pikla", element: <Engineering /> },
      { path: "our-social-impact", element: <SocialImpact /> },
      { path: "go", element: <Go /> },
      { path: "eat", element: <Eat /> },
      { path: "delivery", element: <Delivery /> },
      { path: "get", element: <Get /> },
    ],
  },
]);

export default router;
