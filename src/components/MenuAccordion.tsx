import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import navLinks from "../data/nav-links";
import { Link } from "react-router-dom";

interface Props {
  handleLinkClicked: () => void;
}

const MenuAccordion = ({ handleLinkClicked }: Props) => {
  return (
    <Accordion>
      {navLinks.map((navLink) => {
        if (navLink.title !== "Services") {
          return (
            <AccordionItem key={navLink.title}>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <h2 className="font-quicksand headingSm">{navLink.title}</h2>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {navLink.title === "About us" && (
                  <VStack alignItems="flex-start" marginLeft="1em">
                    <List
                      fontWeight="bold"
                      spacing="0.5em"
                      color="var(--dark-blue)"
                    >
                      <ListItem>
                        <Link to="about-us" onClick={handleLinkClicked}>
                          About us
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="engineering-at-pikla">
                          Engineering at pikla
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/">Careers</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/">Explore open roles</Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/">Why Pikla</Link>
                      </ListItem>
                    </List>
                  </VStack>
                )}
              </AccordionPanel>
            </AccordionItem>
          );
        }
      })}
    </Accordion>
  );
};

export default MenuAccordion;
