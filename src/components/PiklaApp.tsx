import { HStack, Image, VStack, Text, Heading, Show } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { StarIcon } from "@chakra-ui/icons";

const PiklaApp = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <VStack alignItems="flex-start" lineHeight={1} paddingLeft={2}>
        <Show above="430px">
          <Heading fontSize="md">Pikla App</Heading>
          <Text fontSize="sm">Explore Pikla</Text>
          <StarIcon />
        </Show>
      </VStack>
    </HStack>
  );
};

export default PiklaApp;
