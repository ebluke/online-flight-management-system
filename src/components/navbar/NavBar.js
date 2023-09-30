import React from "react";
import { Text, Box, Flex, Spacer, Center } from "@chakra-ui/react";
import UserMenu from "./UserMenu";
import { getDate } from "../../functions/getDate";
import { observer } from "mobx-react";

function NavBar({ pageName }) {
  return (
    <Center bgColor="brand.mantle">
      <Center minW="100%" p="2rem">
        <Flex direction="column" flexGrow="1">
          <Text> {getDate()}</Text>
          <Text fontSize="4xl">{pageName}</Text>
        </Flex>
        <Spacer />
        <Center pr="1rem">
          <UserMenu />
        </Center>
      </Center>
    </Center>
  );
}
export default observer(NavBar);
