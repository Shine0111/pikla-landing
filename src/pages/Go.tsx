import { Heading, Stack, VStack, HStack, Text, Image } from "@chakra-ui/react";
import Hero from "../components/Hero";
import CategoryLink from "../components/CategoryLink";
import { ridesCategories, services } from "../data/services";
import { Link, useNavigate } from "react-router-dom";

const Go = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero buttonText="Book your Ride" buttoned />
      <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
        Go
      </Heading>
      <CategoryLink links={services[0].categories} horizontal={true} />
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
          <Heading fontSize="6xl" color="var(dark-blue)">
            Rides
          </Heading>
          <Text>Order a ride with Pikla, and go further, go faster</Text>
        </VStack>
        <HStack justifyItems="center" alignItems="center" flexWrap="wrap">
          {ridesCategories.map((category) => (
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
    </div>
  );
};

export default Go;
