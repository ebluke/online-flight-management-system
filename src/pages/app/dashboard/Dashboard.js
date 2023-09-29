import React from "react";
import { Flex, Box, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../../components/layout/AppLayout";
import { UserStore } from "../../../stores/UserStore";
import NavBar from "../../../components/navbar/NavBar";
import MyFlights from "./flights/MyFlights";
import FutureFlights from "./flights/FutureFlights";
import Panel from "../../../components/Panel";
import CenterWrapper from "../../../components/layout/CenterWrapper";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Stack bgColor="brand.mantle">
      <NavBar />
      <AppLayout>
        <Flex justifyContent="space-evenly">
          <Panel onClick={() => navigate("/my-flights")}>
            <MyFlights />
          </Panel>
          <Panel onClick={() => navigate("/future-flights")}>
            <FutureFlights />
          </Panel>
        </Flex>
      </AppLayout>
    </Stack>
  );
}
