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

const FooterSection = () => {
  return (
    <Stack
      direction={{
        base: "column",
      }}
      className="innerWidth"
      justifyContent="space-between"
    >
      <Stack
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="space-between"
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
        >
          <VStack alignItems="flex-start">
            <Heading className="footer-heading" fontSize="2xl">
              Services
            </Heading>
            <List>
              {services.map((service) => (
                <ListItem key={service.title}>
                  <Link to={service.to}>{service.title}</Link>
                </ListItem>
              ))}
            </List>
          </VStack>

          <VStack alignItems="flex-start">
            <Heading className="footer-heading" fontSize="2xl">
              Join our team
            </Heading>
            <List>
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
            <Heading className="footer-heading" fontSize="2xl">
              About us
            </Heading>
            <List>
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
