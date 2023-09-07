import { Heading } from "@chakra-ui/react";
import CategoryLink from "../components/CategoryLink";
import Hero from "../components/Hero";
import Rides from "../components/Rides";
import { services } from "../data/services";
import { useState } from "react";
import Taxi from "../components/Taxi";
import PageTitle from "../components/PageTitle";
import CarRental from "../components/CarRental";
import TaxiMoto from "../components/TaxiMoto";
import { ScrollRestoration, useLocation } from "react-router-dom";

const Go = () => {
  const [clickedService, setClickedService] = useState("Rides");
  const location = useLocation();
  const handleLinkClick = (text: string) => {
    setClickedService(text);
  };
  if (location.state)
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
          clickedService={location.state}
        />
        {location.state === "Rides" && <Rides />}
        {location.state === "Taxi" && <Taxi />}
        {location.state === "CarRental" && <CarRental />}
        {location.state === "Taxi-moto" && <TaxiMoto />}
        <ScrollRestoration />
      </div>
    );
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
        clickedService={clickedService}
      />
      {clickedService === "Rides" && <Rides />}
      {clickedService === "Taxi" && <Taxi />}
      {clickedService === "CarRental" && <CarRental />}
      {clickedService === "Taxi-moto" && <TaxiMoto />}
      <ScrollRestoration />
    </div>
  );
};

export default Go;
