import { BsArrowRight } from "react-icons/bs";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  List,
} from "@chakra-ui/react";
import { SubSlink } from "../data/services";
import { Link } from "react-router-dom";

interface Props {
  heading: string;
  categories: SubSlink[];
  onClick: () => void;
  onCategoryClick: (category: string) => void;
  background: string;
  color?: string;
  arrowColor?: string;
}

const ServiceCard = ({
  categories,
  heading,
  onClick,
  onCategoryClick,
  background,
  color,
  arrowColor,
}: Props) => {
  const handleCategoryClick = (category: string) => {
    onCategoryClick(category);
  };
  return (
    <Card
      borderRadius={20}
      height="25em"
      background={background}
      color={color ? color : "white"}
      justifyContent="space-between"
    >
      <CardHeader onClick={onClick}>
        <Link id={heading === "Eat" ? "card-link-reverse" : "card-link"} to="/">
          <h1 className="font-quicksand heading">{heading}</h1>
        </Link>
      </CardHeader>
      <CardBody gap="2rem">
        {categories.map((category) => (
          <List key={category.text}>
            <h6
              id={heading === "Eat" ? "card-link-reverse" : "card-link"}
              onClick={() => handleCategoryClick(category.text)}
            >
              {category.text}
            </h6>
          </List>
        ))}
      </CardBody>
      <CardFooter flexDirection="column" alignItems="flex-end">
        <IconButton
          aria-label="onclick"
          icon={
            <BsArrowRight
              color={arrowColor ? arrowColor : "black"}
              size="2.5em"
            />
          }
          onClick={onClick}
          size="xl"
          background="none"
        />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
