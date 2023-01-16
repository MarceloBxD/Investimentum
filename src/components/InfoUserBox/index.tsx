import React from "react";
import { Flex, Input, Text, Button, Checkbox } from "@chakra-ui/react";

export const InfoUserBox = () => {
  return (
    <Flex
      gap="20px"
      flexDir="column"
      p="20px"
      w="450px"
      h="350px"
      bgColor="#fff"
      borderRadius="15px"
      boxShadow="11px 11px 10px #000"
    >
      <Text fontWeight="bold">Get your free book!</Text>
      <Flex flexDir="column" gap="10px">
        <Input variant="flushed" name="name" placeholder="Full Name" />
        <Input variant="flushed" name="endereco" placeholder="Address" />
        <Input variant="flushed" name="empresa" placeholder="Company Name" />
        <Button w="50%" colorScheme="red">
          Send me the guide!
        </Button>
        <Checkbox>I agree to the terms and conditions</Checkbox>
      </Flex>
    </Flex>
  );
};
