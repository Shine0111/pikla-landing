import { Box, Image, Show } from "@chakra-ui/react";
import heroGif from "../assets/App-gif.png";
import UseApp from "./UseApp";

const Hero = () => {
  return (
    <Box className="innerWidth">
      <Box marginTop={70}>
        <Show below="sm">
          <UseApp />
        </Show>
        <Box>
          <Image src={heroGif} borderRadius={20} objectFit="cover" />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
