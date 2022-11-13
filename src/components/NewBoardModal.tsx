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
  ModalBody,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import iconCross from "../assets/icon-cross.svg";

import { ModalProps } from "../interfaces/modal";

const NewBoard = ({ isOpen, onClose }: ModalProps) => {
  const [boardName, setBoardName] = useState("");
  const [columnInputField, setColumnNameInputField] = useState([
    { columnName: "" },
  ]);
  const [boards, setBoards] = useState([{}]);

  const addColumn = (e: any) => {
    setColumnNameInputField([...columnInputField, { columnName: "" }]);
  };

  const handleColumnChange = (e: any, i: number) => {
    const { name, value } = e.target;
    const columns: any = [...columnInputField];
    columns[i][name] = value;
    setColumnNameInputField(columns);
  };

  const handleRemoveColumn = (index: number) => {
    const columns = [...columnInputField];
    columns.splice(index, 1);
    setColumnNameInputField(columns);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = { board: boardName, columns: columnInputField };
    setBoards((prev) => [...prev, { data }]);
    setBoardName("");
    setColumnNameInputField([{ columnName: "" }]);
  };

  useEffect(() => {
    console.log(boards, "boards");
  }, [boards, setBoards]);

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
            {/* Board Name */}
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
              {/* Columns  */}
              <FormControl>
                <FormLabel
                  color="white"
                  fontSize="12px"
                  fontWeight="700"
                  lineHeight="15.12px"
                  htmlFor="columnName"
                >
                  Board Columns
                </FormLabel>
                {columnInputField?.map((column, index) => {
                  return (
                    <HStack mt={4} key={index}>
                      <Input
                        width={{ base: "264px", sm: "264px", md: "385px" }}
                        color="white"
                        borderColor="#828FA355"
                        _focusVisible={{ borderColor: "#828FA355" }}
                        _hover={{ borderColor: "#828FA355" }}
                        name="columnName"
                        value={column.columnName}
                        onChange={(event) => handleColumnChange(event, index)}
                        type="text"
                      />
                      {index !== 0 && columnInputField?.length > 1 && (
                        <Image
                          src={iconCross}
                          cursor="pointer"
                          onClick={() => handleRemoveColumn(index)}
                        />
                      )}
                    </HStack>
                  );
                })}
              </FormControl>
              {/* Add Column Btn  */}
              <FormControl>
                {columnInputField?.length < 4 && (
                  <Button
                    bg="white"
                    color="mainPurple"
                    width={{ base: "295px", sm: "295px", md: "416px" }}
                    height={10}
                    borderRadius="24px"
                    mt={4}
                    onClick={addColumn}
                  >
                    + Add New Column
                  </Button>
                )}
              </FormControl>
            </Box>
            {/* Create new board btn */}
            <FormControl>
              <Button
                bg="mainPurple"
                _hover={{ bg: "purpleHover" }}
                _active={{ bg: "mainPurple" }}
                color="white"
                width={{ base: "295px", sm: "295px", md: "416px" }}
                height={10}
                borderRadius="24px"
                mt={6}
                mb={8}
                type="submit"
                onClick={onClose}
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
