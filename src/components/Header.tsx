import {
  Button,
  HStack,
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    setIsScrolling(window.scrollY > 0);
  });

  const containerClassName = () => {
    if (isScrolling) return "nav-background nav-shadow";
    return "nav-background ";
  };

  return (
    <div className={containerClassName()}>
      <HStack className="innerWidth" justifyContent="space-between">
        <HStack>
          <Image
            src={logo}
            marginRight={16}
            onClick={() => navigate("/")}
            className="logo"
            width="120px"
          />
          <Show above="lg">
            <HStack>
              {navLinks.map((link) => (
                <Link key={link.title} margin={2}>
                  <h2 className="font-quicksand" style={{ fontWeight: "bold" }}>
                    {link.title}
                  </h2>
                </Link>
              ))}
            </HStack>
          </Show>
        </HStack>
        <HStack>
          <Button
            backgroundColor="var(--primary-color)"
            color="black"
            fontWeight="2em"
          >
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
      <Show below="lg">
        <MenuMobile onClose={onClose} isOpen={isOpen} />
      </Show>
    </div>
  );
};

export default Header;
