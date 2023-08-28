export interface SubSlink {
  text: string;
  onClick: string;
}
interface Services {
  title: string;
  categories: SubSlink[];
  background: string;
  color?: string;
  arrowColor?: string;
  to: string;
}

const services: Services[] = [
  {
    title: "Go",
    categories: [
      { text: "Rides", onClick: "/" },
      { text: "Taxi", onClick: "/" },
      {
        text: "Taxi-moto",
        onClick: "/",
      },
      {
        text: "CarRental",
        onClick: "/",
      },
    ],
    background: "#3837e4",
    arrowColor: "white",
    to: "/",
  },
  {
    title: "Eat",
    categories: [
      {
        text: "Food Delivery",
        onClick: "/",
      },
    ],
    background: "#d2ffd5",
    color: "black",
    to: "/",
  },
  {
    title: "Delivery",
    categories: [
      {
        text: "Packages",
        onClick: "/",
      },
    ],
    background: "#7f5ffa",
    arrowColor: "white",
    to: "/",
  },
  {
    title: "Get Anything",
    categories: [
      {
        text: "Medicines",
        onClick: "/",
      },
      {
        text: "SuperMarkets",
        onClick: "/",
      },
      {
        text: "Flowers",
        onClick: "/",
      },
    ],
    background: "#001942",
    arrowColor: "white",
    to: "/",
  },
];

export default services;
