import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Captains from "./pages/Captains";
import Engineering from "./pages/Engineering";
import SocialImpact from "./pages/SocialImpact";

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
    ],
  },
]);

export default router;
