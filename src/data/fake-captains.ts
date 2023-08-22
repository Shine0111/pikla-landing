import pic from "../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";

interface Captain {
  name: string;
  picture: string;
  comment: string;
}

const captains: Captain[] = [
  {
    name: "Inge Fearchar",
    picture: pic,
    comment:
      "“Careem has a support center and a 24/7 help line for all its Captains.”",
  },
  {
    name: "Varda Inbar",
    picture: pic,
    comment: "“With Careem, I can work at any time and be my own boss.”",
  },
  {
    name: "Ljerka Laurentia",
    picture: pic,
    comment:
      "“Careem enables me to maximize my earnings and improve my lifestyle.”",
  },
];

export default captains;
