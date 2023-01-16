import React from "react";
import { Flex } from "@chakra-ui/react";
import { DataCompany } from "./components/DataCompany";
import { DataUsers } from "./components/DataUsers";

function App() {
  // const breakpoints = {
  //   sm: "30em",
  //   md: "48em",
  //   lg: "62em",
  //   xl: "80em",
  // };

  return (
    <Flex
      flexDir={{ sm: "column", md: "column", lg: "row", xl: "row" }}
      w="100%"
      h="100vh"
      bgColor="#eee"
    >
      <DataCompany />
      <DataUsers />
    </Flex>
  );
}

export default App;
