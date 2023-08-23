import { Box, Button, Image, Show } from "@chakra-ui/react";
import heroGif from "../assets/App-gif.png";
import UseApp from "./UseApp";

interface Props {
  buttoned?: boolean;
  buttonText?: string;
}

const Hero = ({ buttoned, buttonText }: Props) => {
  return (
    <Box className="innerWidth">
      <Box marginTop={70}>
        <Show below="md">
          <UseApp />
        </Show>
        <Box className="hero-image-container innerWidth">
          <Image src={heroGif} borderRadius={20} objectFit="cover" />
          {buttoned && (
            <Button className="hero-image-button">{buttonText}</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
