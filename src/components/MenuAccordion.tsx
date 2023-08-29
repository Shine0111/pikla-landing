import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import navLinks from "../data/nav-links";

const MenuAccordion = () => {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          );
        }
      })}
    </Accordion>
  );
};

export default MenuAccordion;
