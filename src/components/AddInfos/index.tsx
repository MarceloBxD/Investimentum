import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

interface iAddInfos {
  text: string;
}

export const AddInfos = ({ text }: iAddInfos) => {
  return (
    <Flex gap="15px" p="5px">
      <Flex
        justify="center"
        p="14px"
        align="center"
        w="20px"
        h="20px"
        borderRadius="100%"
        bgColor="blue.800"
      >
        <CheckIcon color="white" />
      </Flex>
      <Text align="center">{text}</Text>
    </Flex>
  );
};
