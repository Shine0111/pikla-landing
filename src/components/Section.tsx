import { VStack, Image, Text, Button, Stack } from "@chakra-ui/react";
import team from "../assets/team-pexels.jpg";

interface Props {
  imageOnLeft?: boolean;
  backgrounded?: boolean;
  heading: string;
  description: string;
  buttonText?: string;
  onClick: () => void;
}

const Section = ({
  imageOnLeft,
  backgrounded,
  heading,
  description,
  buttonText,
  onClick,
}: Props) => {
  if (imageOnLeft)
    return (
      <div className={backgrounded ? "custom-background" : ""}>
        <Stack
          className="sectionInnerWidth font-quicksand"
          spacing={24}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          color={"black"}
        >
          <Image
            src={team}
            borderRadius={40}
            boxSize={400}
            width={500}
            objectFit="cover"
          />
          <VStack alignItems="flex-start" spacing={5} justifyContent="center">
            <h1 className="font-quicksand heading">{heading}</h1>
            <Text>{description}</Text>

            <Button onClick={onClick}>
              {buttonText ? buttonText : "Read more"}
            </Button>
          </VStack>
        </Stack>
      </div>
    );

  return (
    <div className={backgrounded ? "custom-background" : ""}>
      <Stack
        className="sectionInnerWidth font-quicksand"
        spacing={24}
        direction={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        color={"black"}
      >
        <VStack alignItems="flex-start" spacing={5} justifyContent="center">
          <h1 className="font-quicksand heading">{heading}</h1>
          <Text>{description}</Text>

          <Button onClick={onClick}>
            {buttonText ? buttonText : "Read more"}
          </Button>
        </VStack>
        <Image
          src={team}
          borderRadius={40}
          boxSize={400}
          width={500}
          objectFit="cover"
        />
      </Stack>
    </div>
  );
};

export default Section;
