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
  background: string;
  color?: string;
  arrowColor?: string;
}

const ServiceCard = ({
  categories,
  heading,
  onClick,
  background,
  color,
  arrowColor,
}: Props) => {
  return (
    <Card
      borderRadius={20}
      height="25em"
      background={background}
      color={color ? color : "white"}
      justifyContent="space-between"
    >
      <CardHeader onClick={onClick}>
        <Link className="card-link" to="/">
          <h1 className="font-quicksand heading">{heading}</h1>
        </Link>
      </CardHeader>
      <CardBody gap="2rem">
        {categories.map((category) => (
          <List>
            <Link key={category.text} className="card-link" to="/">
              {category.text}
            </Link>
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
