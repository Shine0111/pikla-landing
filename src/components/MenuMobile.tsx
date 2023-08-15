import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import MenuAccordion from "./MenuAccordion";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const MenuMobile = ({ onClose, isOpen }: Props) => {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Tabs>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerHeader>
        <DrawerBody>
          <MenuAccordion />
        </DrawerBody>
        <DrawerCloseButton />
      </DrawerContent>
    </Drawer>
  );
};

export default MenuMobile;
