import { Heading, Stack, VStack, HStack, Text, Image } from "@chakra-ui/react";
import { taxiCategories } from "../data/services";
import { Link, useNavigate } from "react-router-dom";
import Section from "../components/Section";
import ServicesSlide from "../components/ServicesSlide";
import TopQuestions from "../components/TopQuestions";
import fakeRideTopQuestions from "../data/fake-ride-questions";

const Taxi = () => {
  const navigate = useNavigate();
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
        <VStack alignItems="flex-start">
          <Heading
            fontSize="6xl"
            color="var(dark-blue)"
            fontFamily="'Quicksand', sans-serif"
          >
            Taxi
          </Heading>
          <Text>The most affordable taxi.</Text>
        </VStack>
        <HStack justifyItems="center" alignItems="center" flexWrap="wrap">
          {taxiCategories.map((category) => (
            <VStack
              alignItems="center"
              onClick={() => navigate(category.to)}
              id="card-link"
              className="iconed-card-link"
              key={category.name}
            >
              <Image src={category.icon} objectFit="fill" />
              <Link to={category.to} id="card-link">
                <Text fontSize="xs">{category.name}</Text>
              </Link>
            </VStack>
          ))}
        </HStack>
      </Stack>
      <Section
        heading={taxiCategories[0].name}
        description={taxiCategories[0].benefit}
        buttonText="Book your ride"
        backgrounded
        imageOnLeft
        onClick={() => console.log("book your ride clicked")}
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

export default Taxi;
