import { Box, Image } from "@chakra-ui/react";
import heroGif from "../assets/App-gif.png";

const Hero = () => {
  return (
    <Box className="innerWidth">
      <Image src={heroGif} borderRadius={20} />
    </Box>
  );
};

export default Hero;
