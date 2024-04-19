import React from "react";
import { Box, Button, Text, VStack, Heading } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useCounter from "../services/counterService";

const Index = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Heading mb={4}>Simple Counter App</Heading>
      <Text fontSize="2xl">Count: {count}</Text>
      <Box>
        <Button leftIcon={<FaMinus />} colorScheme="pink" onClick={decrement} mr={2}>
          Decrease
        </Button>
        <Button rightIcon={<FaPlus />} colorScheme="teal" onClick={increment}>
          Increase
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;
