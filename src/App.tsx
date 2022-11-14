import React, { useEffect, useState } from "react";

import { Box, useDisclosure } from "@chakra-ui/react";

import Header from "./components/Header";
import MainBoard from "./components/MainBoard";

const App = () => {
  const {
    isOpen: isOpenCreateBoardModal,
    onOpen: openCreateBoardModal,
    onClose: closeCreateBoardModal,
  } = useDisclosure();
  const [boardInfo, setBoardInfo] = useState({});

  const getBoardInfo = (data?: any) => {
    setBoardInfo(data);
    return data;
  };

  useEffect(() => {
    console.log(boardInfo, "boardInfo");
  }, [boardInfo]);
  return (
    <Box bg="veryDarkGrey" height="100vh">
      <Header
        boardInfo={boardInfo}
        isOpenCreateBoardModal={isOpenCreateBoardModal}
        openCreateBoardModal={openCreateBoardModal}
        closeCreateBoardModal={closeCreateBoardModal}
      />
      <MainBoard
        getBoardInfo={getBoardInfo}
        isOpenCreateBoardModal={isOpenCreateBoardModal}
        openCreateBoardModal={openCreateBoardModal}
        closeCreateBoardModal={closeCreateBoardModal}
      />
    </Box>
  );
};

export default App;
