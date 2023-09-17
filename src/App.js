import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Stack, Button } from "@chakra-ui/react";
import { UserStore } from "./stores/UserStore";

function App() {
  const userStore = UserStore;

  return (
    <ChakraProvider>
      <Stack>
        <Input
          type="text"
          value={userStore.email}
          name="email"
          placeholder="Email"
          size="md"
          variant="filled"
          onChange={(e) => userStore.set(e.target.name, e.target.value)}
        />
        <Input
          value={userStore.fullName}
          name="fullName"
          placeholder="Full Name"
          size="md"
          variant="filled"
          onChange={(e) => userStore.set(e.target.name, e.target.value)}
        />
        <Input
          type="password"
          value={userStore.password}
          name="password"
          placeholder="Password"
          size="md"
          variant="filled"
          onChange={(e) => userStore.set(e.target.name, e.target.value)}
        />
        {/* Back End testing button */}
        <Button onClick={() => userStore.createUser()}>Submit!</Button>
      </Stack>
      {/* <Router>
        <AppWrapper>
          <Switch>
            <Route exact path="/login" component={} />
            <Route exact path="/signup" component={} />
            {isLoggedIn && <AppRouting />}

            <Route>
              <Redirect to={lastLogin} />
            </Route>
          </Switch>
        </AppWrapper>
      </Router> 
    */}
    </ChakraProvider>
  );
}

export default App;
