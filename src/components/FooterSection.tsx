import { Divider, HStack, VStack, Text, Icon, Stack } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";

const FooterSection = () => {
  return (
    <VStack className="innerWidth">
      <div>first part</div>
      <Divider />
      <Stack
        className="innerWidth"
        justifyContent="space-evenly"
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <div>
          <Text fontSize="xs">All rights reserved. Pikla © 2023</Text>
        </div>
        <div>
          <Text fontSize="xs">Terms of Service Privacy Policy</Text>
        </div>

        <HStack justifyContent="center">
          <Icon as={MdFacebook} />
          <Icon as={AiFillTwitterCircle} />
          <Icon as={TiSocialLinkedinCircular} />
          <Icon as={TiSocialInstagramCircular} />
        </HStack>
      </Stack>
    </VStack>
  );
};

export default FooterSection;
