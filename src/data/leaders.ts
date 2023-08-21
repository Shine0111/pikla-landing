import pic from "../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";

interface Leader {
  name: string;
  picture: string;
  position: string;
  social: string;
}

const leaders: Leader[] = [
  {
    name: "Inge Fearchar",
    picture: pic,
    position: "Co-founder and CEO",
    social: "https://www.facebook.com",
  },
  {
    name: "Varda Inbar",
    picture: pic,
    position: "Co-founder",
    social: "https://www.facebook.com",
  },
  {
    name: "Ljerka Laurentia",
    picture: pic,
    position: "Co-founder and CEO",
    social: "https://www.facebook.com",
  },
];

export default leaders;
