import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import MenuAccordion from "./MenuAccordion";
import services from "../data/services";
import { Link } from "react-router-dom";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const MenuMobile = ({ onClose, isOpen }: Props) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" marginTop="1.5em">
          <Tabs>
            <TabList
              background="#f6f6f6"
              style={{ borderRadius: "1.25em 1.25em 0em 0em " }}
            >
              {services.map((service) => (
                <Tab key={service.title}>
                  <h1 className="font-quicksand headingSm">{service.title}</h1>
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {services.map((service) => (
                <TabPanel key={service.title}>
                  {service.categories.map((category) => (
                    <VStack alignItems="flex-start" spacing={0}>
                      <Link
                        to={category.onClick}
                        className="font-quicksand service-card-link"
                      >
                        {category.text}
                      </Link>
                    </VStack>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </DrawerHeader>
        <MenuAccordion />
        <DrawerCloseButton />
      </DrawerContent>
    </Drawer>
  );
};

export default MenuMobile;
