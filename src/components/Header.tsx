import React from "react";

import { Box, Flex, Button, Image, Heading } from "@chakra-ui/react";

import mobileLogo from "../assets/logo-mobile.svg";
import chevronDown from "../assets/icon-chevron-down.svg";
import addIcon from "../assets/icon-add-task-mobile.svg";
import threeDots from "../assets/icon-vertical-ellipsis.svg";

const Header = () => {
  return (
    <Box
      px="16px"
      bg="darkGrey"
      height="64px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Image src={mobileLogo} boxSize="25px" objectFit="cover" mr="16px" />
        <Heading
          as="h1"
          color="white"
          fontSize="18px"
          fontWeight="700"
          lineHeight="22.68px"
        >
          No Board Found
        </Heading>
        <Image
          src={chevronDown}
          width="8px"
          height="4px"
          ml="8px"
          cursor="pointer"
        />
      </Flex>

      <Flex alignItems="center">
        <Button
          bg="mainPurple"
          width="48px"
          height="32px"
          borderRadius="24px"
          cursor="pointer"
        >
          <Image src={addIcon} />
        </Button>
        <Image
          src={threeDots}
          width="4px"
          height="16px"
          ml="16px"
          cursor="pointer"
        />
      </Flex>
    </Box>
  );
};

export default Header;
