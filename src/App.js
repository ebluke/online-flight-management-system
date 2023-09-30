import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Stack, Center } from "@chakra-ui/react";
import AppWrapper from "./components/layout/AppWrapper";
import { observer } from "mobx-react";
import { UserStore } from "./stores/UserStore";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/app/dashboard/Dashboard";
import Flights from "./pages/app/dashboard/flights/Flights";
import FlightInfo from "./pages/app/dashboard/flights/FlightInfo";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  useParams,
} from "react-router-dom";
import { FlightStore } from "./stores/FlightStore";

function App() {
  const flightStore = FlightStore;
  const userStore = UserStore;

  useEffect(() => {
    flightStore.fillFlights();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "flights",
      element: <Flights />,
    },
    {
      path: "flights/:flightNumber",
      element: <FlightInfo flightNumber={flightStore.selectedFlight} />,
    },
  ]);

  return (
    <AppWrapper>
      <Center w="100%" minH="100vh">
        <RouterProvider router={router} />
      </Center>
    </AppWrapper>
  );
}

export default observer(App);
