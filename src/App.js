import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Stack, Center } from "@chakra-ui/react";
import AppWrapper from "./components/layout/AppWrapper";

import { UserStore } from "./stores/UserStore";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/app/dashboard/Dashboard";
import MyFlights from "./pages/app/dashboard/flights/MyFlights";
import Flight from "./pages/app/dashboard/flights/Flight";
import FutureFlights from "./pages/app/dashboard/flights/FutureFlights";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FlightStore } from "./stores/FlightStore";

function App() {
  const flightStore = FlightStore;
  const userStore = UserStore;
  window.onload = function () {
    userStore.usersPrefill();
    flightStore.fillFlights();
  };

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
      path: "my-flights",
      element: <MyFlights />,
    },
    {
      path: "future-flights",
      element: <FutureFlights />,
    },
    {
      path: "flight-information",
      element: <Flight />,
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

export default App;
