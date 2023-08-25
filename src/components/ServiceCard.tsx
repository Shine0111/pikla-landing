import { BsArrowRight } from "react-icons/bs";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  IconButton,
  Link,
  List,
} from "@chakra-ui/react";

interface Props {
  heading: string;
  categories: string[];
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
      <CardHeader>
        <Heading size="3xl">{heading}</Heading>
      </CardHeader>
      <CardBody gap="2rem">
        {categories.map((category) => (
          <List>
            <Link key={category} fontWeight="bold" fontSize="lg">
              {category}
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
