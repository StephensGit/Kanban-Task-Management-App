import React, { useEffect, useState } from "react";

import { HStack, Input, Image } from "@chakra-ui/react";

import iconCross from "../assets/icon-cross.svg";

interface NewColumnInputProps {
  setColumnName: React.Dispatch<React.SetStateAction<string>>;
  column: string;
  setTesting: (arg0: string) => void;
}

const NewColumnInput = ({
  setColumnName,
  column,
  setTesting,
}: NewColumnInputProps) => {
  const [test, setTest] = useState("");

  useEffect(() => {
    setTesting(test);
  }, [test, setTesting]);

  return (
    <HStack mt={4}>
      <Input
        width={{ base: "264px", sm: "264px", md: "385px" }}
        color="white"
        borderColor="#828FA355"
        _focusVisible={{ borderColor: "#828FA355" }}
        _hover={{ borderColor: "#828FA355" }}
        id="column"
        value={column}
        onChange={({ target }) => {
          setTest(target.value);
        }}
        type="text"
      />
      <Image src={iconCross} cursor="pointer" />
    </HStack>
  );
};

export default NewColumnInput;

{
  /* {[...Array(numberOfColumns)].map((column, i) => {
                  // console.log(column, i);
                  return (
                    <NewColumnInput
                      key={i}
                      setColumnName={setColumnName}
                      setTesting={setTesting}
                      column={column}
                    />
                  );
                })} */
}

// const handleAdd = (e: any) => {
//   e.preventDefault();
//   const col: string = column.trim();

//   if (col && !columns.includes(col)) {
//     setColumns((prevColumns) => [...prevColumns, column]);
//   }
//   setColumnName("");
//   columnInput.current.focus();
// };
