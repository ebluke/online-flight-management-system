import React, { useEffect } from "react";
import { Flex, Box, Text, Stack, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../../components/layout/AppLayout";
import { UserStore } from "../../../stores/UserStore";
import NavBar from "../../../components/navbar/NavBar";
import MyFlights from "./flights/FlightInfo";
import FutureFlights from "./flights/Flights";
import Panel from "../../../components/Panel";
import CenterWrapper from "../../../components/layout/CenterWrapper";
import { GiAirplaneDeparture } from "react-icons/gi";
import { FlightStore } from "../../../stores/FlightStore";

function Dashboard() {
  const navigate = useNavigate();
  const flightStore = FlightStore;
  

  return (
    <AppLayout pageName="Dashboard">
      <Flex justifyContent="space-evenly">
        <Panel onClick={() => navigate("/flights")}>
          <Text>My Flights</Text>
          <Icon boxSize={16} as={GiAirplaneDeparture} />
        </Panel>
        <Panel onClick={() => navigate("/flights")}>
          <Text>Future Flights</Text>
          <Icon boxSize={16} as={GiAirplaneDeparture} />
        </Panel>
      </Flex>
    </AppLayout>
  );
}
export default Dashboard;
