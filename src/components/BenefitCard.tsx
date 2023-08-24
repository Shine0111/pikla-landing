import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Image,
} from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  heading: string;
  description: string;
}

const BenefitCard = ({ imageSrc, heading, description }: Props) => {
  return (
    <Card
      align="center"
      borderRadius={20}
      background="var(--gray-background)"
      padding={5}
      boxShadow="none"
    >
      <CardHeader>
        <Image src={imageSrc} />
      </CardHeader>
      <CardBody>
        <Heading color="black" fontSize="xl">
          {heading}
        </Heading>
      </CardBody>
      <CardFooter>
        <Text color="black">{description}</Text>
      </CardFooter>
    </Card>
  );
};

export default BenefitCard;
