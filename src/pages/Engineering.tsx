import { Stack, Heading, Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import OurBlogSection from "../components/OurBlogSection";
import quotes from "../data/fake-quotes";
import Quote from "../components/Quote";

const Engineering = () => {
  return (
    <div>
      <Hero />
      <Stack className="sectionInnerWidth">
        <Heading className="titlePadding">Engineering at Pikla</Heading>
        <Box>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            voluptatem repellendus praesentium quis sapiente iste voluptatum est
            porro cupiditate atque? A vero vitae doloremque rerum id, deleniti
            aut numquam cum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            voluptatem repellendus praesentium quis sapiente iste voluptatum est
            porro cupiditate atque? A vero vitae doloremque rerum id, deleniti
            aut numquam cum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            voluptatem repellendus praesentium quis sapiente iste voluptatum est
            porro cupiditate atque? A vero vitae doloremque rerum id, deleniti
            aut numquam cum.
          </p>
        </Box>
      </Stack>
      <div className="innerWidth">
        {quotes.map((quote) => (
          <Quote
            key={quote.person}
            imageSrc={quote.imageSrc}
            quote={quote.quote}
            person={quote.person}
            position={quote.position}
          />
        ))}
      </div>
      <OurBlogSection />
    </div>
  );
};

export default Engineering;
