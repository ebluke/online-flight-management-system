import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <text> Testing chackra integration</text>
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
