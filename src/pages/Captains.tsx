import { Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import benefits from "../data/benefits";
import BenefitCard from "../components/BenefitCard";
import StatSection from "../components/StatSection";
import Section from "../components/Section";
import TopQuestions from "../components/TopQuestions";
// import CaptainsSlide from "../components/CaptainsSlide";

const Captains = () => {
  return (
    <div>
      <Hero buttoned buttonText="Sign Up" />
      <div className="innerWidth">
        <Heading textAlign="center">Captains benefits</Heading>
      </div>
      <SimpleGrid
        className="sectionInnerWidth"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.heading}
            imageSrc={benefit.picture}
            heading={benefit.heading}
            description={benefit.description}
          />
        ))}
      </SimpleGrid>
      <div className="custom-background">
        <StatSection />
      </div>
      <Section
        heading="Driving with Pikla"
        description="Drive with Pikla and earn with every ride. Choose your own hours, enjoy amazing Captain rewards and get professional training."
        imageOnLeft
        buttonText="Sign Up"
        onClick={() => console.log("clicked sign up")}
      />
      <Section
        heading="Delivering with Pikla"
        description="Deliver food, groceries and more to our amazing customers across the region. Earn with every order, and benefit from real time Captain support."
        buttonText="Sign Up"
        onClick={() => console.log("clicked sign up")}
      />
      <VStack className="custom-background" paddingBottom="10rem">
        <div className="innerWidth">
          <Heading textAlign="center">Meet the Captains</Heading>
        </div>
        {/* <CaptainsSlide /> */}
        <Text>this section is still on dev ...</Text>
      </VStack>
      <div className="innerWidth">
        <TopQuestions />
      </div>
    </div>
  );
};

export default Captains;
