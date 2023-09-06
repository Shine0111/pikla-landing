import { VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SubSlink } from "../data/services";

interface Props {
  links: SubSlink[];
  horizontal?: boolean;
  onClickCallback?: (text: string) => void;
}

const CategoryLink = ({ links, horizontal, onClickCallback }: Props) => {
  const handleClick = (text: string) => {
    // Call the onClickCallback with the clicked link.text
    if (onClickCallback) {
      onClickCallback(text);
    }
  };
  if (horizontal)
    return (
      <HStack className="innerWidth" justifyContent="center">
        {links.map((link) => (
          <Link
            to={link.to}
            className="font-quicksand service-card-link"
            id="card-link"
            key={link.text}
            onClick={() => handleClick(link.text)}
          >
            {link.text}
          </Link>
        ))}
      </HStack>
    );
  return (
    <VStack
      className="innerWidth"
      alignItems="flex-start"
      spacing={0}
      id="card-link"
    >
      {links.map((link) => (
        <Link
          to={link.to}
          className="font-quicksand service-card-link"
          key={link.text}
        >
          {link.text}
        </Link>
      ))}
    </VStack>
  );
};

export default CategoryLink;
