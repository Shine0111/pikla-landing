import {
  Card,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  IconButton,
  CardFooter,
} from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";

interface Props {
  imageSrc: string;
  heading: string;
  position: string;
  onClick: () => void;
}

const ProfileCard = ({ imageSrc, heading, position, onClick }: Props) => {
  return (
    <Card
      maxW="sm"
      direction={{
        base: "row",
        sm: "row",
        md: "row",
        lg: "column",
      }}
    >
      <CardBody>
        <Image
          src={imageSrc}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          width={300}
          height={300}
          objectFit="cover"
        />
      </CardBody>
      <CardFooter>
        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <Text>{position}</Text>
          <IconButton aria-label="facebook" as={MdFacebook} onClick={onClick} />
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
