import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AddInfos } from "../AddInfos";
import { InfoUserBox } from "../InfoUserBox";

export const DataUsers = () => {
  return (
    <Flex
      h="100%"
      p="40px"
      flexDir="column"
      w="100%"
      gap="10px"
      align="center"
      flex="1"
    >
      <Flex maxH="70%" flexDir="column" gap="10px">
        <Text fontWeight="600" fontSize="40px" maxW="350px">
          You want leads? We got Your Back!
        </Text>
        <AddInfos text="250 pages of practical tips and knowledge" />
        <AddInfos text="5 real-world lead gen case studies" />
        <AddInfos text="Includes 7 tools we use that will help you generate lead for free!" />

        <InfoUserBox />
      </Flex>
    </Flex>
  );
};
