import pic from "../assets/logo-long.png";

export interface Benefit {
  picture: string;
  heading: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    picture: pic,
    heading: "Earnings",
    description:
      "Be your own boss by earning at your own convenience. Take advantage of peak hours and bonuses & guarantees.",
  },
  {
    picture: pic,
    heading: "Captain Club",
    description:
      "Careem offers benefits and rewards to its loyal captains based on which tier they are in.",
  },
  {
    picture: pic,
    heading: "Flexibility",
    description:
      "With Careem you can enjoy the flexibility of choosing your working hours and days",
  },
];

export default benefits;
