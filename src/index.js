import * as ReactDOM from "react-dom/client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {localStorage.setItem("chakra-ui-color-mode", "dark")}
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
