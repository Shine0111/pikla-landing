import { Heading } from "@chakra-ui/react";
import CategoryLink from "../components/CategoryLink";
import Hero from "../components/Hero";
import Rides from "../components/Rides";
import { services } from "../data/services";
import { useState } from "react";

const Go = () => {
  const [clickedService, setClickedService] = useState("");
  const handleLinkClick = (text: string) => {
    setClickedService(text);
  };
  return (
    <div>
      <Hero buttonText="Book your Ride" buttoned />
      <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
        Go
      </Heading>
      <CategoryLink
        links={services[0].categories}
        horizontal={true}
        onClickCallback={handleLinkClick}
      />
      <p>{clickedService}</p>
      <Rides />
    </div>
  );
};

export default Go;
