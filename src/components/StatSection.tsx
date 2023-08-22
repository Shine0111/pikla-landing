import { Stack, Heading, VStack, Text } from "@chakra-ui/react";

const StatSection = () => {
  return (
    <Stack
      direction="row"
      height="150px"
      className="sectionInnerWidth"
      justifyContent="space-evenly"
    >
      <VStack>
        <Heading>0</Heading>
        <Text>Rides</Text>
      </VStack>
      <div className="vl"></div>
      <VStack>
        <Heading>0</Heading>
        <Text>Captains</Text>
      </VStack>
      <div className="vl"></div>
      <VStack>
        <Heading>1</Heading>
        <Text>City</Text>
      </VStack>
    </Stack>
  );
};

export default StatSection;
