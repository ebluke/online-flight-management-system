import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function AppLayout({ children }) {
  return (
    <Box
      h="100vh"
      w="100%"
      minW="70vw"
      bg="brand.mantle"
      pt="1.5rem"
      px="1.5rem"
    >
      <Flex
        direction="column"
        maxW="container.xl"
        w="100%"
        h="100%"
        px="1rem"
        pt="4rem"
        pb="1rem"
      >
        {children}
      </Flex>
    </Box>
  );
}
