import Section from "./Section";
import { useNavigate } from "react-router-dom";

const EngineeringPiklaSection = () => {
  const navigate = useNavigate();
  return (
    <Section
      heading="Engineering at Pikla"
      description="Pikla is creating cutting-edge technology every day across the world, in a mission to build a lasting tech institution that inspires."
      onClick={() => navigate("/engineering-at-pikla")}
    />
  );
};

export default EngineeringPiklaSection;
