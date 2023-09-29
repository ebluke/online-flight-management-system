import React from "react";
import { Box } from "@chakra-ui/react";

export default function AppWrapper({ children }) {
  return (
    <Box minH="100vh" w="100vw" bg="brand.bgBase">
      {children}
    </Box>
  );
}
