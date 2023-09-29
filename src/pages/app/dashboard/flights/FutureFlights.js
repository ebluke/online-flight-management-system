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

export default function FutureFlights() {
  //const flightUrl = "/fligh-information/";
  // `${flightUrl}+${obj.flightNum}`
  const flightStore = FlightStore;
  // window.onload = function () {
  //   flightStore.fillFlights();
  // };

  const navigate = useNavigate();

  return (
    <AppLayout pageName="Future Flights">
      <TableContainer overflowY="scroll">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Flight Name</Th>
              <Th>From</Th>
              <Th>To </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* generate Flights to fill data */}
            {flightStore.flights.map((obj) => (
              <Tr onClick={() => navigate("/flight-information")}>
                <Td>{obj.flightNumber}</Td>
                <Td> {obj.origin}</Td>
                <Td> {obj.destination}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AppLayout>
  );
}
