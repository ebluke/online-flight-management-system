import React from "react";
import { Box, Center } from "@chakra-ui/react";

export default function Panel({ children, onClick, ...props }) {
  return (
    <Box
      borderRadius="1rem"
      boxSize="sm"
      onClick={onClick}
      minW="sm"
      bgColor="#11111b"
    >
      <Center>{children}</Center>
    </Box>
  );
}
