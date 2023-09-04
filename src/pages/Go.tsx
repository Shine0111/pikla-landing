import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import CategoryLink from "../components/CategoryLink";
import services from "../data/services";

const Go = () => {
  return (
    <div>
      <Hero buttonText="Book your Ride" buttoned />
      <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
        Go
      </Heading>
      <CategoryLink links={services[0].categories} horizontal={true} />
      <Stack
        direction={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        className="innerWidth"
      >
        <VStack alignItems="flex-start">
          <Heading fontSize="6xl" color="var(dark-blue)">
            Rides
          </Heading>
          <Text>Order a ride with Pikla, and go further, go faster</Text>
        </VStack>
      </Stack>
    </div>
  );
};

export default Go;
