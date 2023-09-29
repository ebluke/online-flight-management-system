import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { UserStore } from "../../stores/UserStore";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const userStore = UserStore;

  return (
    <div>
      <Text>Login</Text>
      <Button onClick={() => navigate("/signup")}>signup</Button>
    </div>
  );
}
