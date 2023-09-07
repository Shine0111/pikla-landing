import { Stack, Heading, Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import OurBlogSection from "../components/OurBlogSection";
import quotes from "../data/fake-quotes";
import Quote from "../components/Quote";
import PageTitle from "../components/PageTitle";
import { ScrollRestoration } from "react-router-dom";

const Engineering = () => {
  return (
    <div>
      <PageTitle titleAddOn="Engineering at Pikla" />
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
      <ScrollRestoration />
    </div>
  );
};

export default Engineering;
