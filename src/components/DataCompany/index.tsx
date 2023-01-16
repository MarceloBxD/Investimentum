import React from "react";
import { Flex, Img, Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import graph from "../../assets/images/graph.jpg";

export const DataCompany = () => {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      gap="10px"
      flex="1"
      p="20px"
      h="100%"
    >
      <Flex flexDir="column" h="100%" w="100%" gap="10px" p="40px" flex="1">
        <Flex align="center" gap="10px" h="70px">
          <Img
            h="80%"
            objectFit="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            src={logo}
          />
          <Text
            fontWeight="600"
            mt="20px"
            fontSize="43px"
            textAlign="center"
            h="100"
            textShadow="8px 8px 10px #ccc"
          >
            Investimentum
          </Text>
        </Flex>
        <Img
          maxH="70%"
          objectFit="cover"
          backgroundPosition="center"
          src={graph}
        />
        <Text fontWeight="500">Authors featured on: </Text>
      </Flex>
    </Flex>
  );
};
