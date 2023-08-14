import { Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import navLinks from "../data/nav-links";
import logo from "../assets/logo-long.png";

const Header = () => {
  return (
    <HStack className="innerWidth" justifyContent="space-between">
      <HStack>
        <Image src={logo} marginRight={16} />
        <HStack>
          {navLinks.map((link) => (
            <Link fontSize={17} fontWeight="bold" margin={2}>
              {link.title}
            </Link>
          ))}
        </HStack>
      </HStack>
      <HStack>
        <Button backgroundColor="var(--dark-blue)" color="white">
          Download the app
        </Button>
        <Text>Lang</Text>
      </HStack>
    </HStack>
  );
};

export default Header;
