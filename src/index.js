import * as ReactDOM from "react-dom/client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* {localStorage.setItem("chakra-ui-color-mode", "dark")} */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
