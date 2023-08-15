import {
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import navLinks from "../data/nav-links";
import logo from "../assets/logo-long.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack className="innerWidth navbar" justifyContent="space-between">
        <HStack>
          <Image src={logo} marginRight={16} />
          <Show above="lg">
            <HStack>
              {navLinks.map((link) => (
                <Link key={link.title} margin={2}>
                  <Heading size="sm">{link.title}</Heading>
                </Link>
              ))}
            </HStack>
          </Show>
        </HStack>
        <HStack>
          <Button backgroundColor="var(--dark-blue)" color="white">
            Download the app
          </Button>
          <Show above="lg">
            <Text>Lang</Text>
          </Show>
          <Show below="lg">
            <IconButton
              icon={<HamburgerIcon />}
              aria-label={"menu button"}
              onClick={onOpen}
            />
          </Show>
        </HStack>
      </HStack>
      <MenuMobile onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Header;
