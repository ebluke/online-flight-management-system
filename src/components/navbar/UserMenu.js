import React from "react";
import { FlightStore } from "../../stores/FlightStore";
import { getDate } from "../../functions/getDate";
import { useNavigate } from "react-router";
import { observer } from "mobx-react";

function UserMenu() {
  const navigate = useNavigate();
  const flightStore = FlightStore;
  return <button onClick={() => navigate("/dashboard")}>UserMenu</button>;
}
export default observer(UserMenu);
