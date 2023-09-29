import React from "react";
import { Box } from "@chakra-ui/react";

export default function CenterWrapper({ children }) {
  return (
    <Box w="100%" maxW="30rem">
      {children}
    </Box>
  );
}
