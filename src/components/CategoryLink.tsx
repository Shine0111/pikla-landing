import { VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SubSlink } from "../data/services";

interface Props {
  links: SubSlink[];
  horizontal?: boolean;
}

const CategoryLink = ({ links, horizontal }: Props) => {
  if (horizontal)
    return (
      <HStack className="innerWidth" justifyContent="center">
        {links.map((link) => (
          <Link to={link.to} className="font-quicksand service-card-link">
            {link.text}
          </Link>
        ))}
      </HStack>
    );
  return (
    <VStack className="innerWidth" alignItems="flex-start" spacing={0}>
      {links.map((link) => (
        <Link to={link.to} className="font-quicksand service-card-link">
          {link.text}
        </Link>
      ))}
    </VStack>
  );
};

export default CategoryLink;
