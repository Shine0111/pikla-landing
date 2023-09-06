import comfortIcon from "../assets/comfort.png";
import suvIcon from "../assets/suv.png";
import kidsIcon from "../assets/kids.png";

export interface SubSlink {
  text: string;
  to: string;
}
interface Services {
  title: string;
  categories: SubSlink[];
  background: string;
  color?: string;
  arrowColor?: string;
  to: string;
}

interface CategoryCategory {
  icon: string;
  name: string;
  to: string;
  benefit: string;
}

const services: Services[] = [
  {
    title: "Go",
    categories: [
      { text: "Rides", to: "#" },
      { text: "Taxi", to: "#" },
      {
        text: "Taxi-moto",
        to: "#",
      },
      {
        text: "CarRental",
        to: "#",
      },
    ],
    background: "#3837e4",
    arrowColor: "white",
    to: "/go",
  },
  {
    title: "Eat",
    categories: [
      {
        text: "Food Delivery",
        to: "#",
      },
    ],
    background: "#d2ffd5",
    color: "black",
    to: "/eat",
  },
  {
    title: "Delivery",
    categories: [
      {
        text: "Packages",
        to: "/",
      },
    ],
    background: "#7f5ffa",
    arrowColor: "white",
    to: "/delivery",
  },
  {
    title: "Get ",
    categories: [
      {
        text: "Medicines",
        to: "#",
      },
      {
        text: "SuperMarkets",
        to: "#",
      },
      {
        text: "Flowers",
        to: "#",
      },
    ],
    background: "#001942",
    arrowColor: "white",
    to: "/get",
  },
];

const ridesCategories: CategoryCategory[] = [
  {
    icon: comfortIcon,
    name: "Comfort",
    to: "/",
    benefit:
      "lorem ipsum lsdkf sldfkj mdkfn lskdf ksldfk sldkfj sldkfj sed ldkf ls lslnfa;lskdjfpw  lksdjf l",
  },
  {
    icon: suvIcon,
    name: "SUV",
    to: "/",
    benefit:
      "lorem ipsum lsdkf sldfkj mdkfn lskdf ksldfk sldkfj sldkfj sed ldkf ls lslnfa;lskdjfpw  lksdjf l",
  },
  {
    icon: kidsIcon,
    name: "Kids",
    to: "/",
    benefit:
      "lorem ipsum lsdkf sldfkj mdkfn lskdf ksldfk sldkfj sldkfj sed ldkf ls lslnfa;lskdjfpw  lksdjf l",
  },
];
const taxiCategories: CategoryCategory[] = [
  {
    icon: "",
    name: "Pikla Taxi",
    to: "/",
    benefit:
      "lorem ipsum lsdkf sldfkj mdkfn lskdf ksldfk sldkfj sldkfj sed ldkf ls lslnfa;lskdjfpw  lksdjf l",
  },
];
const taxiMotoCategories: CategoryCategory[] = [
  {
    icon: "",
    name: "Pikla Moto",
    to: "/",
    benefit:
      "lorem ipsum lsdkf sldfkj mdkfn lskdf ksldfk sldkfj sldkfj sed ldkf ls lslnfa;lskdjfpw  lksdjf l",
  },
];

export { services, ridesCategories, taxiCategories, taxiMotoCategories };
