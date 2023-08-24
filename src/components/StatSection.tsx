import { Stack, Heading, VStack } from "@chakra-ui/react";

interface Props {
  number0: string;
  text0: string;
  number1: string;
  text1: string;
  number2: string;
  text2: string;
}

const StatSection = ({
  number0,
  text0,
  number1,
  text1,
  number2,
  text2,
}: Props) => {
  return (
    <Stack
      direction="row"
      height="150px"
      className="sectionInnerWidth"
      justifyContent="space-evenly"
      color="black"
    >
      <VStack>
        <Heading>{number0}</Heading>
        <Heading fontSize="lg">{text0}</Heading>
      </VStack>
      <div className="vl"></div>
      <VStack>
        <Heading>{number1}</Heading>
        <Heading fontSize="lg">{text1}</Heading>
      </VStack>
      <div className="vl"></div>
      <VStack>
        <Heading>{number2}</Heading>
        <Heading fontSize="lg">{text2}</Heading>
      </VStack>
    </Stack>
  );
};

export default StatSection;
