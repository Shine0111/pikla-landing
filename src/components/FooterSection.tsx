import {
  Divider,
  HStack,
  VStack,
  Text,
  Stack,
  IconButton,
  Image,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";

import logo from "../assets/logo-long.png";
import appStore from "../assets/app-store.webp";
import googlePlay from "../assets/google-play.webp";
import apkDownload from "../assets/apk-download.webp";
import services from "../data/services";
import { Link } from "react-router-dom";
import termsOfServices from "../data/terms-of-services";

const FooterSection = () => {
  return (
    <Stack
      direction={{
        base: "column",
      }}
      className="innerWidth"
      justifyContent="space-between"
      marginTop="10em"
    >
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="space-between"
        paddingBottom="3em"
      >
        <VStack>
          <button className="footer-heading">
            <Image src={logo} width="125px" />
          </button>
          <button>
            <Image src={appStore} width="150px" />
          </button>
          <button>
            <Image src={googlePlay} width="150px" />
          </button>
          <button>
            <Image src={apkDownload} width="150px" />
          </button>
        </VStack>
        <Stack
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          gap="10rem"
          alignItems="center"
        >
          <VStack alignItems="flex-start">
            <Heading
              className="footer-heading"
              fontSize="2xl"
              color="var(--dark-blue)"
            >
              Services
            </Heading>
            <List fontWeight="bold">
              {services.map((service) => (
                <ListItem key={service.title}>
                  <Link to={service.to}>{service.title}</Link>
                </ListItem>
              ))}
            </List>
          </VStack>

          <VStack alignItems="flex-start">
            <Heading
              className="footer-heading"
              fontSize="2xl"
              color="var(--dark-blue)"
            >
              Join our team
            </Heading>
            <List fontWeight="bold">
              <ListItem>
                <Link to="about-us">About us</Link>
              </ListItem>
              <ListItem>
                <Link to="engineering-at-pikla">Engineering at pikla</Link>
              </ListItem>
              <ListItem>
                <Link to="/">Careers</Link>
              </ListItem>
              <ListItem>
                <Link to="/">Explore open roles</Link>
              </ListItem>
              <ListItem>
                <Link to="/">Why Pikla</Link>
              </ListItem>
            </List>
          </VStack>

          <VStack alignItems="flex-start">
            <Heading
              className="footer-heading"
              fontSize="2xl"
              color="var(--dark-blue)"
            >
              About us
            </Heading>
            <List fontWeight="bold">
              <ListItem>
                <Link to="our-social-impact">Our Social Impact</Link>
              </ListItem>
              <ListItem>
                <Link to="/">Blog</Link>
              </ListItem>
            </List>
          </VStack>
        </Stack>
        <Text>Lang</Text>
      </Stack>
      {/* second footer part  */}
      <Divider />
      <Stack
        direction={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        justifyContent="space-between"
        // alignItems={{ sm: "center" }}
        paddingTop="2em"
      >
        <div>
          <Text fontSize="xs">All rights reserved. Pikla © 2023</Text>
        </div>
        <Stack
          direction={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing="1.5em"
        >
          {termsOfServices.map((termsOfService) => (
            <Link key={termsOfService.title} to={termsOfService.to}>
              <Text fontSize="xs">{termsOfService.title}</Text>
            </Link>
          ))}
        </Stack>

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
