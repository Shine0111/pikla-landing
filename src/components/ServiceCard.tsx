import { ArrowForwardIcon } from "@chakra-ui/icons";
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
}

const ServiceCard = ({ categories, heading, onClick, background }: Props) => {
  return (
    <Card borderRadius={20} height="15em" background={background} color="white">
      <CardHeader>
        <Heading size="md">{heading}</Heading>
      </CardHeader>
      <CardBody>
        {categories.map((category) => (
          <List>
            <Link key={category}>{category}</Link>
          </List>
        ))}
      </CardBody>
      <CardFooter flexDirection="column" alignItems="flex-end">
        <IconButton
          aria-label="onclick"
          icon={<ArrowForwardIcon />}
          onClick={onClick}
          size="lg"
          background="none"
        />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
