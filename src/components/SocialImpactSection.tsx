import Section from "./Section";
import { useNavigate } from "react-router-dom";

const SocialImpactSection = () => {
  const navigate = useNavigate();
  return (
    <Section
      heading="Our Social Impact"
      description="We believe deeply in driving social and economic progress across the region. We use our app to connect customers to the communities that need the most support."
      imageOnLeft
      onClick={() => navigate("/our-social-impact")}
    />
  );
};

export default SocialImpactSection;
