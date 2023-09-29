import React from "react";
import { Flex, Box, Text, Stack, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../../components/layout/AppLayout";
import { UserStore } from "../../../stores/UserStore";
import NavBar from "../../../components/navbar/NavBar";
import MyFlights from "./flights/MyFlights";
import FutureFlights from "./flights/FutureFlights";
import Panel from "../../../components/Panel";
import CenterWrapper from "../../../components/layout/CenterWrapper";
import { GiAirplaneDeparture } from "react-icons/gi";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <AppLayout pageName="Dashboard">
      <Flex justifyContent="space-evenly">
        <Panel onClick={() => navigate("/my-flights")}>
          <MyFlights />
        </Panel>
        <Panel onClick={() => navigate("/future-flights")}>
          <Text>Future Flights</Text>
          <Icon boxSize={16} as={GiAirplaneDeparture} />
        </Panel>
      </Flex>
    </AppLayout>
  );
}
