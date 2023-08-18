import AboutUsSection from "../components/AboutUsSection";
import CaptainsSection from "../components/CaptainsSection";
import EngineeringPiklaSection from "../components/EngineeringPiklaSection";
import Hero from "../components/Hero";
import OurBlogSection from "../components/OurBlogSection";
import ServicesSlide from "../components/ServicesSlide";
import SocialImpactSection from "../components/SocialImpactSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServicesSlide />
      <AboutUsSection />
      <CaptainsSection />
      <EngineeringPiklaSection />
      <SocialImpactSection />
      <OurBlogSection />
    </div>
  );
};

export default HomePage;
