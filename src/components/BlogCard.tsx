import { Button, Heading, Stack, Image, Text, Box } from "@chakra-ui/react";

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
    <Stack maxW="sm" direction="column" color="black">
      <Stack alignItems="center">
        <Image
          src={imageSrc}
          alt="Green double couch with wooden legs"
          objectFit="cover"
          borderRadius={imageBorderRadius ? imageBorderRadius : "lg"}
          boxSize={imageBoxSize}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" textAlign="center">
            {heading}
          </Heading>
          <Text>{description}</Text>
        </Stack>
      </Stack>
      <Box>
        {buttoned && (
          <Button variant="solid" colorScheme="blue" onClick={onClick}>
            Read more
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default BlogCard;
