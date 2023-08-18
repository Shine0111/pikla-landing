import Section from "./Section";
import { useNavigate } from "react-router-dom";

const CaptainsSection = () => {
  const navigate = useNavigate();
  return (
    <Section
      heading="Captains"
      description="Drive with Pikla and earn with every ride. Choose your own hours, enjoy amazing Captain rewards and get professional training."
      imageOnLeft
      backgrounded
      onClick={() => navigate("/captains")}
    />
  );
};

export default CaptainsSection;
