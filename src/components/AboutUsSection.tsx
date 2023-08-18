import Section from "./Section";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();
  return (
    <Section
      heading="About Us"
      description="Our purpose is to simplify and improve the lives of people and build an awesome organisation that inspires.
                   Learn more about our purpose, people and services."
      onClick={() => navigate("/about-us")}
    />
  );
};

export default AboutUsSection;
