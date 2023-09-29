import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import AppWrapper from "./components/layout/AppWrapper";

import { UserStore } from "./stores/UserStore";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function App() {
  const userStore = UserStore;

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
  ]);

  return (
    <ChakraProvider>
      <Stack>
        <AppWrapper>
          <RouterProvider router={router} />
        </AppWrapper>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
