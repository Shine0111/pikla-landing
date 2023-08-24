import pic from "../assets/logo-long.png";

interface SocialImpact {
  picture: string;
  heading: string;
  description: string;
}

const socialImpacts: SocialImpact[] = [
  {
    picture: pic,
    heading: "Direct Donations",
    description:
      "We make it simple for customers to give to a cause they care about, and to donate in honour of a loved one.",
  },
  {
    picture: pic,
    heading: "Ride & donate",
    description:
      "Our donation car types let you give back, every time you take a ride. A portion of the fare goes to a community in need.",
  },
  {
    picture: pic,
    heading: "Impact Partnerships",
    description:
      "We partner with other companies that help us increase our impact by matching and/or adding to customer donations.",
  },
];

export default socialImpacts;
