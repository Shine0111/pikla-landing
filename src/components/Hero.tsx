import { Box, Button, Image, Show } from "@chakra-ui/react";
import heroGif from "../assets/logo-long.png";
import UseApp from "./UseApp";
import useWindowSize from "../hooks/useWindowSize";

interface Props {
  buttoned?: boolean;
  buttonText?: string;
}

const Hero = ({ buttoned, buttonText }: Props) => {
  const { windowWidth } = useWindowSize();
  return (
    <Box className="innerWidth">
      <Box marginTop={70}>
        <Show below="md">
          <UseApp />
        </Show>
        <Box className="hero-image-container">
          <Image
            src={heroGif}
            borderRadius={20}
            objectFit="contain"
            width="500px"
            height="250px"
          />
          {buttoned && (
            <div style={{ position: "absolute", textAlign: "center" }}>
              {windowWidth > 700 && (
                <Button className="hero-image-button-desktop">
                  {buttonText}
                </Button>
              )}

              {windowWidth < 400 && (
                <Button className="hero-image-button-mobile">
                  {buttonText}
                </Button>
              )}
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
