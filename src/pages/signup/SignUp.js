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

export default function SignUp() {
  const navigate = useNavigate();
  const userStore = UserStore;

  return (
    <div>
      <Text>Sign Up</Text>
      <Button onClick={() => navigate("/login")}>login</Button>
    </div>
  );
}
