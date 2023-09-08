import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import Section from "../components/Section";
import ServicesSlide from "../components/ServicesSlide";
import TopQuestions from "../components/TopQuestions";
import fakeRideTopQuestions from "../data/fake-ride-questions";

const DeliveryContent = () => {
  return (
    <div>
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        className="innerWidth"
        justifyContent="center"
        alignItems="center"
        spacing="3em"
      >
        <VStack alignItems="center">
          <Heading
            fontSize="6xl"
            color="var(dark-blue)"
            fontFamily="'Quicksand', sans-serif"
          >
            Package Delivery
          </Heading>
          <Text>Your favorite Delivery, your way.</Text>
        </VStack>
      </Stack>
      <Section
        heading={"Delivery blablabla."}
        description={"lorem ipsum slk sejkl dlkjf alsdkfj laksdjf."}
        buttonText="Order now"
        backgrounded
        imageOnLeft
        onClick={() => console.log("Order now clicked")}
      />
      <Heading
        textAlign="center"
        marginY="2em"
        fontFamily="'Quicksand', sans-serif"
      >
        Explore more with Pikla
      </Heading>
      <ServicesSlide />
      <TopQuestions topQuestions={fakeRideTopQuestions} />
    </div>
  );
};

export default DeliveryContent;
