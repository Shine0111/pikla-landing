interface Services {
  title: string;
  categories: string[];
  background: string;
  to: string;
}

const services: Services[] = [
  { title: "Go", categories: ["taxi", "suv"], background: "blue", to: "/" },
  {
    title: "Eat",
    categories: ["Livraison", "Find"],
    background: "purple",
    to: "/",
  },
  {
    title: "Livraison",
    categories: ["Livraison"],
    background: "indigo",
    to: "/",
  },
  {
    title: "Medicament",
    categories: ["Medicament"],
    background: "green",
    to: "/",
  },
];

export default services;
