import { Stack, VStack } from "@chakra-ui/react";

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
        <h1 className="font-quicksand heading">{number0}</h1>
        <h2 className="font-quicksand heading">{text0}</h2>
      </VStack>
      <div className="vl"></div>
      <VStack>
        <h1 className="font-quicksand heading">{number1}</h1>
        <h2 className="font-quicksand heading">{text1}</h2>
      </VStack>
      <div className="vl"></div>
      <VStack>
        <h1 className="font-quicksand heading">{number2}</h1>
        <h2 className="font-quicksand heading">{text2}</h2>
      </VStack>
    </Stack>
  );
};

export default StatSection;
