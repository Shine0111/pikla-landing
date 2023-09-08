import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import Section from "../components/Section";
import ServicesSlide from "../components/ServicesSlide";
import TopQuestions from "../components/TopQuestions";
import fakeRideTopQuestions from "../data/fake-ride-questions";

const FoodDelivery = () => {
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
            Food
          </Heading>
          <Text>Your favorite food, your way.</Text>
        </VStack>
      </Stack>
      <Section
        heading={"Order from 70+ restaurants."}
        description={
          "Whatever you’re craving, we’ve got it covered. Enjoy your favorites, or find new ones. Order them all with a tap, all on one app."
        }
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

export default FoodDelivery;
