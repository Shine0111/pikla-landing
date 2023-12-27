import {
  Button,
  HStack,
  IconButton,
  Image,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import navLinks from "../data/nav-links";
import logo from "../assets/logo-long.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuMobile from "./MenuMobile";
import { useEffect, useRef, useState } from "react";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state } = useLocation();

  const navigate = useNavigate();

  const stateRef = useRef(state);

  useEffect(() => {
    // Option 1: Using useState
    // setCurrentState(null);
    // Option 2: Using useRef
    // stateRef.current = false;
  }, []);

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
              <Link to="/" state={false}>
                <h2 className="font-quicksand" style={{ fontWeight: "bold" }}>
                  Services
                </h2>
              </Link>

              {navLinks.map((navLink) => {
                if (navLink.title === "Services") return null;
                return (
                  <Link key={navLink.title} to={navLink.to}>
                    <h2
                      className="font-quicksand"
                      style={{ fontWeight: "bold" }}
                    >
                      {navLink.title}
                    </h2>
                  </Link>
                );
              })}
            </HStack>
          </Show>
        </HStack>
        <HStack>
          <Button
            background="var(--blue-bluer)"
            colorScheme="blue"
            color="white"
            fontWeight="2em"
          >
            <Link
              to="/"
              state={true}
              className="download-the-app-link"
              onClick={() => (stateRef.current = true)}
            >
              Download the app
            </Link>
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
      <ScrollRestoration />
    </div>
  );
};

export default Header;
