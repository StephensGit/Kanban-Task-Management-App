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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewBoard = ({ isOpen, onClose }: ModalProps) => {
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
        ></ModalBody>

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
          test
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewBoard;
