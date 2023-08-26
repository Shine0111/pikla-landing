import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  imageBorderRadius?: string;
  imageBoxSize?: string;
  heading: string;
  description: string;
  buttoned?: boolean;
  onClick?: () => void;
}

const BlogCard = ({
  imageSrc,
  imageBorderRadius,
  imageBoxSize,
  heading,
  description,
  buttoned,
  onClick,
}: Props) => {
  return (
    <Card maxW="sm" background="none">
      <CardBody>
        <Image
          src={imageSrc}
          alt="Green double couch with wooden legs"
          objectFit="cover"
          borderRadius={imageBorderRadius ? imageBorderRadius : "lg"}
          boxSize={imageBoxSize}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        {buttoned && (
          <Button variant="solid" colorScheme="blue" onClick={onClick}>
            Read more
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
