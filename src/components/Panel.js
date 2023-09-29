import React from "react";
import { Center, Stack } from "@chakra-ui/react";

export default function Panel({ children, onClick, ...props }) {
  return (
    <Center
      borderRadius="1rem"
      boxSize="sm"
      onClick={onClick}
      minW="sm"
      bgColor="brand.crust"
    >
      <Stack>{children}</Stack>
    </Center>
  );
}
