import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useColorMode,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
} from "@chakra-ui/react";

import iconCross from "../assets/icon-cross.svg";

import { ModalProps, ColumnName } from "../interfaces/modal";

const NewBoard = ({ isOpen, onClose }: ModalProps) => {
  const [boardName, setBoardName] = useState("");
  const [column, setColumnName] = useState("");
  const [columns, setColumns] = useState<string[]>([]);
  const columnInput: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(boardName, columns);
    setBoardName("");
    setColumnName("");
  };

  const handleAdd = (e: any) => {
    e.preventDefault();
    const col: string = column.trim();

    if (col && !columns.includes(col)) {
      setColumns((prevColumns) => [...prevColumns, column]);
    }
    setColumnName("");
    columnInput.current.focus();
  };

  useEffect(() => {
    // console.log(boardName, column);
  }, [boardName]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="darkGrey"
        maxW={{ base: "343px", sm: "343px", md: "480px" }}
        mt={24}
        mx="auto"
      >
        <ModalHeader
          as="h2"
          color="WHITE"
          fontSize="18px"
          fontWeight="700"
          lineHeight="22.68px"
          m={0}
          px={4}
        >
          ADD NEW BOARD
        </ModalHeader>

        <ModalBody px={4} m={0}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel
                color="white"
                fontSize="12px"
                fontWeight="700"
                lineHeight="15.12px"
              >
                Board Name
              </FormLabel>
              <Input
                width={{ base: "295px", sm: "295px", md: "480px" }}
                color="white"
                borderColor="#828FA355"
                borderStyle={{ opacity: "25%" }}
                _focusVisible={{ borderColor: "#828FA355" }}
                _hover={{ borderColor: "#828FA355" }}
                id="boardName"
                value={boardName}
                onChange={({ target }) => setBoardName(target.value)}
                type="text"
              />
            </FormControl>
            <Box mt="24px">
              <FormControl>
                <FormLabel
                  color="white"
                  fontSize="12px"
                  fontWeight="700"
                  lineHeight="15.12px"
                >
                  Board Columns
                </FormLabel>
                <HStack>
                  <Input
                    width={{ base: "264px", sm: "264px", md: "385px" }}
                    color="white"
                    borderColor="#828FA355"
                    _focusVisible={{ borderColor: "#828FA355" }}
                    _hover={{ borderColor: "#828FA355" }}
                    id="column"
                    value={column}
                    ref={columnInput}
                    onChange={({ target }) => setColumnName(target.value)}
                    type="text"
                  />
                  <Image src={iconCross} cursor="pointer" />
                </HStack>
              </FormControl>
              <FormControl>
                <Button
                  bg="white"
                  color="mainPurple"
                  width={{ base: "295px", sm: "295px", md: "416px" }}
                  height={10}
                  borderRadius="24px"
                  mt={4}
                  onClick={handleAdd}
                >
                  + Add New Column
                </Button>
              </FormControl>
            </Box>

            <FormControl>
              <Button
                bg="mainPurple"
                color="white"
                width={{ base: "295px", sm: "295px", md: "416px" }}
                height={10}
                borderRadius="24px"
                mt={6}
                mb={8}
                _hover={{ bg: "purpleHover" }}
                type="submit"
              >
                Create New Board
              </Button>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewBoard;
