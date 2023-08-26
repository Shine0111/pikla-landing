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
    comment: "Pikla has a support center and a 24/7 help line.”",
  },
  {
    name: "Varda Inbar",
    picture: pic,
    comment: "“With Pikla, I can work at any time and be my own boss.”",
  },
  {
    name: "Ljerka Laurentia",
    picture: pic,
    comment:
      "Pikla enables me to maximize my earnings and improve my lifestyle.”",
  },
  {
    name: "Ljerka Laurentia",
    picture: pic,
    comment:
      "Pikla enables me to maximize my earnings and improve my lifestyle.”",
  },
];

export default captains;
