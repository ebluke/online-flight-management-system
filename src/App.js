import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Stack, Center } from "@chakra-ui/react";
import AppWrapper from "./components/layout/AppWrapper";

import { UserStore } from "./stores/UserStore";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/app/dashboard/Dashboard";
import MyFlights from "./pages/app/dashboard/flights/MyFlights";
import FutureFlights from "./pages/app/dashboard/flights/FutureFlights";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const userStore = UserStore;
  window.onload = function () {
    userStore.usersPrefill();
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
