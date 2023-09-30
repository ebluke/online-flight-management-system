import React, { useEffect, useState } from "react";
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
import flightData from "../../../../database/flightData";
import { observer } from "mobx-react";

function FutureFlights() {
  const flightStore = FlightStore;
  const flightUrl = "/flights/";
  const navigate = useNavigate();

  const handleClick = (flightnum) => {
    flightStore.set("selectedFlight", flightnum);
    navigate(`${flightUrl}${flightnum}`);
  };

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
            {flightData.map((obj, key) => (
              <Tr onClick={() => handleClick(obj.flightNumber)} key={key}>
                <Td>{obj.flightNumber}</Td>
                <Td>{obj.origin}</Td>
                <Td>{obj.destination}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </AppLayout>
  );
}
export default FutureFlights;
