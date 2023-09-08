import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { Heading } from "@chakra-ui/react";
import Hero from "../components/Hero";
import CategoryLink from "../components/CategoryLink";
import { services } from "../data/services";
import { useLocation } from "react-router-dom";
import FoodDelivery from "../components/FoodDelivery";

const Eat = () => {
  const [clickedService, setClickedService] = useState("Food Delivery");
  const location = useLocation();
  const handleLinkClick = (text: string) => {
    setClickedService(text);
  };

  if (location.state)
    return (
      <div>
        <PageTitle titleAddOn="Eat" />
        <Hero buttonText="Order now" buttoned />
        <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
          Eat
        </Heading>

        <CategoryLink
          links={services[1].categories}
          horizontal={true}
          onClickCallback={handleLinkClick}
          clickedService={location.state}
        />
        {location.state === "Food Delivery" && <FoodDelivery />}
        <ScrollRestoration />
      </div>
    );
  return (
    <div>
      <PageTitle titleAddOn="Eat" />
      <Hero buttonText="Order now" buttoned />
      <Heading textAlign="center" color="var(--dark-blue)" fontSize="6xl">
        Eat
      </Heading>

      <CategoryLink
        links={services[1].categories}
        horizontal={true}
        onClickCallback={handleLinkClick}
        clickedService={clickedService}
      />
      {clickedService === "Food Delivery" && <FoodDelivery />}
      <ScrollRestoration />
    </div>
  );
};

export default Eat;
