import { Show } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UseApp from "./components/UseApp";
import ServicesSlide from "./components/ServicesSlide";
import AboutUsSection from "./components/AboutUsSection";
import CaptainsSection from "./components/CaptainsSection";
import EngineeringPiklaSection from "./components/EngineeringPiklaSection";
import SocialImpactSection from "./components/SocialImpactSection";
import OurBlogSection from "./components/OurBlogSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div>
      <Header />
      <Show below="sm">
        <UseApp />
      </Show>
      <Hero />
      <ServicesSlide />
      <AboutUsSection />
      <CaptainsSection />
      <EngineeringPiklaSection />
      <SocialImpactSection />
      <OurBlogSection />
      <FooterSection />
    </div>
  );
};

export default App;
