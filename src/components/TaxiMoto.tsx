import { Heading, Stack, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/Section";
import ServicesSlide from "../components/ServicesSlide";
import TopQuestions from "../components/TopQuestions";
import fakeRideTopQuestions from "../data/fake-ride-questions";
import BenefitCard from "./BenefitCard";
import taxiMotoBenefits from "../data/taxi-moto-benefits";

const TaxiMoto = () => {
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
            Taxi Moto
          </Heading>
          <Text>Bike your way, every day.</Text>
        </VStack>
      </Stack>
      <SimpleGrid
        className="sectionInnerWidth"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {taxiMotoBenefits.map((benefit) => (
          <BenefitCard
            key={benefit.heading}
            heading={benefit.heading}
            imageSrc={benefit.picture}
            description={benefit.description}
          />
        ))}
      </SimpleGrid>

      <Section
        heading={"It's fast."}
        description={
          "Taxi Moto is perfect for quick trips. A few taps, and you’re off!"
        }
        buttonText="Ride now"
        backgrounded
        imageOnLeft
        onClick={() => console.log("Ride now clicked")}
      />
      <Section
        heading={"It's affordable."}
        description={
          "Choose from annual, monthly, weekly and daily memberships."
        }
        buttonText="Ride now"
        onClick={() => console.log("Ride now clicked")}
      />
      <Section
        heading={"It's easy."}
        description={
          "Finding a station, renting a bike and paying is super simple."
        }
        buttonText="Ride now"
        backgrounded
        imageOnLeft
        onClick={() => console.log("Ride now clicked")}
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

export default TaxiMoto;
