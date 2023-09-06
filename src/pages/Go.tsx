import { Heading } from "@chakra-ui/react";
import CategoryLink from "../components/CategoryLink";
import Hero from "../components/Hero";
import Rides from "../components/Rides";
import { services } from "../data/services";
import { useState } from "react";
import Taxi from "../components/Taxi";
import PageTitle from "../components/PageTitle";

const Go = () => {
  const [clickedService, setClickedService] = useState("Rides");
  const handleLinkClick = (text: string) => {
    setClickedService(text);
  };
  return (
    <div>
      <PageTitle titleAddOn="Go" />
      <Hero buttonText="Book your Ride" buttoned />
      <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
        Go
      </Heading>
      <CategoryLink
        links={services[0].categories}
        horizontal={true}
        onClickCallback={handleLinkClick}
      />
      {clickedService === "Rides" && <Rides />}
      {clickedService === "Taxi" && <Taxi />}
    </div>
  );
};

export default Go;
