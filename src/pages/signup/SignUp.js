import React from "react";
import { observer } from "mobx-react";
import {
  Center,
  Text,
  Flex,
  Stack,
  Spinner,
  ScaleFade,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { UserStore } from "../../stores/UserStore";
import JInput from "../../components/input/JInput";
import CenterWrapper from "../../components/layout/CenterWrapper";

function SignUp() {
  const navigate = useNavigate();
  const userStore = UserStore;

  const handleSubmit = () => {
    try {
      userStore.createAccount();
    } catch (err) {
      console.log(err);
    }
    navigate("/login");
  };

  return (
    <CenterWrapper>
      <ScaleFade in={true}>
        <Stack spacing="6" pb="5rem">
          <Text as="b" fontSize="4xl" textAlign="center">
            Sign Up
          </Text>
          <JInput
            isRequired
            variant="flushed"
            id="user-email"
            type="email"
            name="email"
            placeholder="Email"
            value={userStore.email}
            onChange={(e) => userStore.set(e.target.name, e.target.value)}
          />

          <JInput
            isRequired
            variant="flushed"
            id="user-password"
            type="password"
            name="password"
            placeholder="Password"
            value={userStore.password}
            onChange={(e) => userStore.set(e.target.name, e.target.value)}
          />
          <JInput
            isRequired
            variant="flushed"
            id="user-fullname"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={userStore.fullName}
            onChange={(e) => userStore.set(e.target.name, e.target.value)}
          />
          <JInput
            isRequired
            variant="flushed"
            type="number"
            id="user-mobilenumber"
            name="mobileNum"
            placeholder="Mobile Number"
            value={userStore.mobileNum}
            onChange={(e) => userStore.set(e.target.name, e.target.value)}
          />
          <Flex justifyContent="space-between">
            <Button
              variant="outline"
              px="4rem"
              onClick={() => navigate("/login")}
            >
              Back
            </Button>

            <Button variant="outline" px="4rem" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Flex>
        </Stack>
      </ScaleFade>
    </CenterWrapper>
  );
}
export default observer(SignUp);
