import React from "react";
import {
  Flex,
  Text,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../../../components/layout/AppLayout";
import { FlightStore } from "../../../../stores/FlightStore";
import { observer } from "mobx-react";

function FlightInfo({ flightNumber = "null" }) {
  const flightStore = FlightStore;

  const navigate = useNavigate();

  return (
    <AppLayout pageName="Flight Info">
      <Text> flight info for: {flightNumber}</Text>
    </AppLayout>
  );
}
export default observer(FlightInfo);
