import { Divider, HStack, Text, Stack, IconButton } from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";

const FooterSection = () => {
  return (
    <Stack
      direction={{
        base: "column",
      }}
      className="innerWidth"
      justifyContent="space-between"
    >
      <div>first part of footer</div>
      <Divider />
      <Stack
        direction={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        justifyContent="space-between"
      >
        <div>
          <Text fontSize="xs">All rights reserved. Pikla © 2023</Text>
        </div>
        <div>
          <Text fontSize="xs">Terms of Service Privacy Policy</Text>
        </div>

        <HStack>
          <IconButton
            aria-label="facebook"
            icon={<MdFacebook />}
            background="none"
          />
          <IconButton
            aria-label="twitter"
            icon={<AiFillTwitterCircle />}
            background="none"
          />
          <IconButton
            aria-label="linkedin"
            icon={<TiSocialLinkedinCircular />}
            background="none"
          />
          <IconButton
            aria-label="instagram"
            icon={<TiSocialInstagramCircular />}
            background="none"
          />
        </HStack>
      </Stack>
    </Stack>
  );
};

export default FooterSection;
