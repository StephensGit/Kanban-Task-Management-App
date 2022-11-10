import React from "react";

import {
  Image,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Switch,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";

import iconBoardWhite from "../assets/icon-board-white.svg";
import iconBoardPurple from "../assets/icon-board-purple.svg";
import iconDarkMode from "../assets/icon-dark-theme.svg";
import iconLightMode from "../assets/icon-light-theme.svg";

import { ModalProps } from "../interfaces/modal";

const MobileMenu = ({ isOpen, onClose }: ModalProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode, "colorMode");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="darkGrey" maxW="264px" mt={24}>
        <ModalHeader
          color="mediumGrey"
          fontSize="12px"
          fontWeight="700"
          lineHeight="15.12px"
          m={0}
          px={4}
        >
          ALL BOARDS (3)
        </ModalHeader>

        <ModalBody
          fontSize="15px"
          fontWeight="700"
          lineHeight="18.9px"
          p={0}
          m={0}
        >
          <UnorderedList m={0} color="mediumGrey">
            <ListItem
              bg="mainPurple"
              color="white"
              px={4}
              borderRightRadius={25}
              maxW="70%"
              height="48px"
              display="flex"
              alignItems="center"
              cursor="pointer"
            >
              <Image mr="13px" boxSize="16px" src={iconBoardWhite} />
              Platform Launch
            </ListItem>
            <ListItem
              display="flex"
              alignItems="center"
              height="48px"
              px={4}
              cursor="pointer"
            >
              <Image mr="13px" boxSize="16px" src={iconBoardWhite} />
              Marketing Plan
            </ListItem>
            <ListItem
              display="flex"
              alignItems="center"
              height="48px"
              px={4}
              cursor="pointer"
            >
              <Image mr="13px" boxSize="16px" src={iconBoardWhite} />
              Roadmap
            </ListItem>
            <ListItem
              color="mainPurple"
              display="flex"
              alignItems="center"
              height="48px"
              px={4}
              cursor="pointer"
            >
              <Image mr="13px" boxSize="16px" src={iconBoardPurple} />+ Create
              New Board
            </ListItem>
          </UnorderedList>
        </ModalBody>

        <ModalFooter
          width="235px"
          borderRadius={4}
          mx="auto"
          my={4}
          bg="veryDarkGrey"
          display="flex"
          justifyContent="center"
          alignSelf="center"
        >
          <Image src={iconDarkMode} cursor="pointer" />
          <Switch mx={4} onChange={toggleColorMode} cursor="pointer" />
          <Image src={iconLightMode} cursor="pointer" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MobileMenu;
