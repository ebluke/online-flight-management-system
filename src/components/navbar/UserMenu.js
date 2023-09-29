import React from "react";
import { FlightStore } from "../../stores/FlightStore";
import { getDate } from "../../functions/getDate";

export default function UserMenu() {
  const flightStore = FlightStore;
  return (
    <button onClick={() => flightStore.generateFlightNumber()}>UserMenu</button>
  );
}
