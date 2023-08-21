import { Box, Heading, Stack } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ParagraphContainer from "../components/ParagraphContainer";
import LeadershipIntroduction from "../components/LeadershipIntroduction";
import Leaders from "../components/Leaders";
import Section from "../components/Section";
import OurBlogSection from "../components/OurBlogSection";

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <Box className="innerWidth">
        <ParagraphContainer>
          <Stack>
            <Heading className="titlePadding">About us</Heading>
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
          <LeadershipIntroduction />
          <Leaders />
          <Section
            heading="Join our Journey"
            description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              voluptatem repellendus praesentium quis sapiente iste voluptatum
              est porro cupiditate atque? A vero vitae doloremque rerum id,
              deleniti aut numquam cum."
            onClick={() => console.log("clicked join our journey")}
          />
        </ParagraphContainer>
      </Box>
      <OurBlogSection />
    </div>
  );
};

export default AboutUs;
