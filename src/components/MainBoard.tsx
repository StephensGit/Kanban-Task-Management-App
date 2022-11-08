import React from "react";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";

import NewBoard from "./NewBoard";
const MainBoard = () => {
  const { isOpen, onOpen: openMainBoardModal, onClose } = useDisclosure();
  return (
    <>
      <NewBoard isOpen={isOpen} onClose={onClose} />

      <Box
        height="auto"
        width="100%"
        px="16px"
        mx="auto"
        display="flex"
        flexDir="column"
        alignItems="center"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Text
          width="auto"
          color="mediumGrey"
          fontSize="18px"
          fontWeight="800"
          lineHeight="22.68px"
          textAlign="center"
        >
          This board is empty. Create a new column to get started.
        </Text>
        <Button
          bg="mainPurple"
          color="white"
          width="70%"
          height="48px"
          px="17px"
          mt="20px"
          fontSize="15px"
          fontWeight="700"
          lineHeight="18.9px"
          borderRadius="24px"
          onClick={openMainBoardModal}
        >
            + Create New Board  
        </Button>
      </Box>
    </>
  );
};

export default MainBoard;
