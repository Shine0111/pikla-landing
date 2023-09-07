import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import Section from "../components/Section";
import ServicesSlide from "../components/ServicesSlide";
import TopQuestions from "../components/TopQuestions";
import fakeRideTopQuestions from "../data/fake-ride-questions";

const CarRental = () => {
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
        <VStack alignItems="center" maxWidth="500px" textAlign="center">
          <Heading
            fontSize="6xl"
            color="var(dark-blue)"
            fontFamily="'Quicksand', sans-serif"
          >
            Car Rental
          </Heading>
          <Text>
            No hassle, no deposit, no paperwork. Rent a car for a month, a week,
            or even a day on Pikla. Choose from a wide selection of cars and
            have it delivered straight to your door.
          </Text>
        </VStack>
      </Stack>

      <Section
        heading={"Daily"}
        description={
          "Need a car for the day? You got it. Forget about long processes and hidden fees. All you have to do is choose the car type, date & time, delivery location and we’ll take care of the rest."
        }
        buttonText="Rent now"
        backgrounded
        imageOnLeft
        onClick={() => console.log("Rent now clicked")}
      />
      <Section
        heading={"Monthly"}
        description={
          "What’s the easiest way to enjoy all the perks of having a car without actually owning one? Rent a car the smarter way with Pikla. You’ll love the flexibility, ease, and convenience a monthly car rental can give you."
        }
        buttonText="Rent now"
        onClick={() => console.log("Rent now clicked")}
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

export default CarRental;
