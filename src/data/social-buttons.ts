import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";

interface SocialButton {
  ariaLabel: string;
  icon: React.FC;
}

const socialButtons: SocialButton[] = [
  { ariaLabel: "facebook", icon: MdFacebook },
  { ariaLabel: "twitter", icon: AiFillTwitterCircle },
  { ariaLabel: "linkedin", icon: TiSocialLinkedinCircular },
  { ariaLabel: "instagram", icon: TiSocialInstagramCircular },
];

export default socialButtons;
