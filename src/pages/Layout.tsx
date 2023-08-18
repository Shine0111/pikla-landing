import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Layout;
