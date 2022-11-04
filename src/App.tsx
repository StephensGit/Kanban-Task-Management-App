import React from "react";

import { Box } from "@chakra-ui/react";

import Header from "./components/Header";
import MainBoard from "./components/MainBoard";

const App = () => {
  return (
    <Box>
      <Header />
      <MainBoard />
    </Box>
  );
};

export default App;
