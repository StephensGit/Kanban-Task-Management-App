import React from "react";

import { Box } from "@chakra-ui/react";

import Header from "./components/Header";
import MainBoard from "./components/MainBoard";

const App = () => {
  return (
    <Box bg="veryDarkGrey" height="100vh">
      <Header />
      <MainBoard />
    </Box>
  );
};

export default App;
