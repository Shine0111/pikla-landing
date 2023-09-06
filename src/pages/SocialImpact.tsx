import { Stack, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ParagraphContainer from "../components/ParagraphContainer";
import socialImpacts from "../data/social-impacts";
import BenefitCard from "../components/BenefitCard";
import StatSection from "../components/StatSection";
import Section from "../components/Section";
import ServicesSlide from "../components/ServicesSlide";
import PageTitle from "../components/PageTitle";

const SocialImpact = () => {
  return (
    <div>
      <PageTitle titleAddOn="Our Social impact" />
      <Hero />
      <ParagraphContainer>
        <Stack>
          <Heading className="titlePadding">Our Social Impact</Heading>
          <Box>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              voluptatem repellendus praesentium quis sapiente iste voluptatum
              est porro cupiditate atque? A vero vitae doloremque rerum id,
              deleniti aut numquam cum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              voluptatem repellendus praesentium quis sapiente iste voluptatum
              est porro cupiditate atque? A vero vitae doloremque rerum id,
              deleniti aut numquam cum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              voluptatem repellendus praesentium quis sapiente iste voluptatum
              est porro cupiditate atque? A vero vitae doloremque rerum id,
              deleniti aut numquam cum.
            </p>
          </Box>
        </Stack>
      </ParagraphContainer>
      <SimpleGrid
        className="sectionInnerWidth"
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {socialImpacts.map((socialImpact) => (
          <BenefitCard
            key={socialImpact.heading}
            imageSrc={socialImpact.picture}
            heading={socialImpact.heading}
            description={socialImpact.description}
          />
        ))}
      </SimpleGrid>
      <div className="custom-background">
        <StatSection
          number0="$1M"
          text0="Raised"
          number1="+100 K"
          text1="Lives Impacted"
          number2="+10"
          text2="NGO Partners"
        />
      </div>
      <Section
        heading="Join us in making a difference"
        description="We encourage our customers to give to the causes they care about. They can donate via our donations tile on the app, take a dedicated car type where a portion of the proceeds from each ride go to charity and more."
        buttonText="Donate now"
        onClick={() => console.log("donate now clicked")}
        imageOnLeft
      />
      <Section
        heading="We are responsible for our communities"
        description="Our colleagues are constantly looking for ways to contribute to developing the region. Joining Pikla means you will have the chance to volunteer your time and skills to communities in need."
        buttonText="Donate now"
        backgrounded
        onClick={() => console.log("donate now clicked")}
      />
      <Heading
        textAlign="center"
        paddingTop="7rem"
        paddingBottom="4rem"
        fontSize="3xl"
      >
        Explore more with Pikla
      </Heading>
      <ServicesSlide />
    </div>
  );
};

export default SocialImpact;
