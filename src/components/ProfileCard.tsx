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
  socialLink?: boolean;
  onClick?: () => void;
}

const ProfileCard = ({
  imageSrc,
  heading,
  position,
  socialLink,
  onClick,
}: Props) => {
  return (
    <Card
      maxW="sm"
      direction={{
        base: "row",
        sm: "row",
        md: "row",
        lg: "column",
      }}
      boxShadow="none"
      background="none"
    >
      <CardBody>
        <Image
          src={imageSrc}
          alt="Green double couch with wooden legs"
          borderRadius={30}
          width={300}
          height={300}
          objectFit="cover"
        />
      </CardBody>
      <CardFooter>
        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <Text>{position}</Text>
          {socialLink === true && (
            <IconButton
              aria-label="facebook"
              as={MdFacebook}
              onClick={onClick}
            />
          )}
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
