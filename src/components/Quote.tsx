import { Stack, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  quote: string;
  person: string;
  position: string;
}

const Quote = ({ imageSrc, quote, person, position }: Props) => {
  return (
    <Stack
      className="innerWidth"
      background="var(--primary-gradient)"
      borderRadius={20}
      spacing={20}
      alignItems="flex-start"
      paddingTop="2rem"
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
      }}
    >
      <Image
        objectFit="cover"
        src={imageSrc}
        boxSize="500px"
        borderRadius={20}
      />
      <VStack alignItems="flex-start" spacing="5rem">
        <Text fontSize="1.5rem">{quote}</Text>
        <div>
          <h2>{person}</h2>
          <h3>{position}</h3>
        </div>
      </VStack>
    </Stack>
  );
};

export default Quote;
