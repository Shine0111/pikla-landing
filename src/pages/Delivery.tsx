import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { Heading } from "@chakra-ui/react";
import Hero from "../components/Hero";
import CategoryLink from "../components/CategoryLink";
import { services } from "../data/services";
import { useLocation } from "react-router-dom";
import DeliveryContent from "../components/DeliveryContent";

const Delivery = () => {
  const [clickedService, setClickedService] = useState("Packages");
  const location = useLocation();
  const handleLinkClick = (text: string) => {
    setClickedService(text);
  };

  if (location.state)
    return (
      <div>
        <PageTitle titleAddOn="Delivery" />
        <Hero buttonText="Order now" buttoned />
        <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
          Delivery
        </Heading>

        <CategoryLink
          links={services[2].categories}
          horizontal={true}
          onClickCallback={handleLinkClick}
          clickedService={location.state}
        />
        {location.state === "Packages" && <DeliveryContent />}
        <ScrollRestoration />
      </div>
    );
  return (
    <div>
      <PageTitle titleAddOn="Delivery" />
      <Hero buttonText="Order now" buttoned />
      <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
        Delivery
      </Heading>

      <CategoryLink
        links={services[2].categories}
        horizontal={true}
        onClickCallback={handleLinkClick}
        clickedService={clickedService}
      />
      {clickedService === "Packages" && <DeliveryContent />}
      <ScrollRestoration />
    </div>
  );
};

export default Delivery;
