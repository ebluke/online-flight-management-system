import React from "react";
import { Center } from "@chakra-ui/react";

export default function AppWrapper({ children }) {
  return (
    <Center minH="100vh" w="100vw" bg="#1e1e2e">
      {children}
    </Center>
  );
}
