import { Heading } from "@chakra-ui/react";
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
    </div>
  );
};

export default Go;
