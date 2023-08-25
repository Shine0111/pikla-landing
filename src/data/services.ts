interface Services {
  title: string;
  categories: string[];
  background: string;
  color?: string;
  arrowColor?: string;
  to: string;
}

const services: Services[] = [
  {
    title: "Go",
    categories: ["Rides", "Taxi", "Taxi-moto", "CarRental"],
    background: "#3837e4",
    arrowColor: "white",
    to: "/",
  },
  {
    title: "Eat",
    categories: ["Food Delivery"],
    background: "#d2ffd5",
    color: "black",
    to: "/",
  },
  {
    title: "Delivery",
    categories: ["Packages"],
    background: "#7f5ffa",
    arrowColor: "white",
    to: "/",
  },
  {
    title: "Get Anything",
    categories: ["Medicines", "SuperMarkets", "Flowers"],
    background: "#001942",
    arrowColor: "white",
    to: "/",
  },
];

export default services;
