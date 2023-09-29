import React, { useState } from "react";
import { UserStore } from "../../stores/UserStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import CenterWrapper from "../../components/layout/CenterWrapper";
import {
  Center,
  Text,
  Flex,
  Stack,
  Spinner,
  ScaleFade,
  Input,
  Button,
  Spacer,
} from "@chakra-ui/react";

function Login() {
  const navigate = useNavigate();
  const userStore = UserStore;
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");

  const handleLogin = () => {
    try {
      userStore.login(uname, pword);
    } catch (err) {
      console.log(err);
    }
    navigate("/dashboard");
  };

  return (
    <CenterWrapper>
      <ScaleFade in={true}>
        <form>
          <Stack spacing="6" pb="5rem">
            <Text as="b" fontSize="4xl" textAlign="center">
              JEAANS
            </Text>

            <Input
              variant="flushed"
              type="email"
              name="email"
              placeholder="Email"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
            <Input
              variant="flushed"
              type="password"
              name="password"
              placeholder="Password"
              value={pword}
              onChange={(e) => setPword(e.target.value)}
            />
            <Text>{userStore.errMsg}</Text>

            <Button variant="outline" onClick={() => handleLogin()}>
              Login
            </Button>

            <Flex gap="0.5rem" justifyContent="center">
              <Text>Need an account?</Text>
              <Button
                size="xs"
                variant="link"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </Flex>
          </Stack>
        </form>
      </ScaleFade>
    </CenterWrapper>
  );
}
export default observer(Login);
