import React, { useEffect } from "react";

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
  useDisclosure,
} from "@chakra-ui/react";

import iconBoardWhite from "../assets/icon-board-white.svg";
import iconBoardPurple from "../assets/icon-board-purple.svg";
import iconBoardGrey from "../assets/icon-board-grey.svg";
import iconDarkMode from "../assets/icon-dark-theme.svg";
import iconLightMode from "../assets/icon-light-theme.svg";

import { BoardInfo2Type, ModalProps } from "../interfaces/modal";

import NewBoard from "./NewBoardModal";

const MobileMenu = ({
  isOpen,
  onClose,
  boardInfo,
  openCreateBoardModal,
}: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    console.log(boardInfo, "boardInfo test");
  }, [boardInfo]);

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
          {`ALL BOARDS (${boardInfo.length})`}
        </ModalHeader>

        <ModalBody
          fontSize="15px"
          fontWeight="700"
          lineHeight="18.9px"
          p={0}
          m={0}
        >
          <UnorderedList m={0} color="mediumGrey">
            {boardInfo?.length > 0 &&
              boardInfo?.map((board: any, index: number) => {
                return (
                  <ListItem
                    key={index}
                    bg={index === 0 ? "mainPurple" : "transparent"}
                    _hover={{ bg: "purpleHover" }}
                    color={index === 0 ? "white" : "mediumGrey"}
                    px={4}
                    borderRightRadius={25}
                    maxW="70%"
                    height="48px"
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    mt={2}
                  >
                    <Image
                      mr="13px"
                      boxSize="16px"
                      src={index === 0 ? iconBoardWhite : iconBoardGrey}
                      _hover={{ src: iconBoardWhite }}
                    />
                    {board?.data?.board}
                  </ListItem>
                );
              })}
            <ListItem
              color="mainPurple"
              display="flex"
              alignItems="center"
              height="48px"
              px={4}
              cursor="pointer"
            >
              <Image mr="13px" boxSize="16px" src={iconBoardPurple} />
              <span onClick={openCreateBoardModal}>+ Create New Board</span>
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
