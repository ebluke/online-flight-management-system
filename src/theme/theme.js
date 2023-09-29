import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        overflow: "hidden",
      },
    },
  },
  colors: {
    brand: {
      // Layout
      base: "#1e1e2e",
      mantle: "#181825",
      crust: "#11111b",

      // Buttons

      // Color
      rosewater: "#f5e0dc",
      flamingo: "#f2cdcd ",
      pink: "#f5c2e7 ",
      mauve: "#cba6f7",
      red: "#f38ba8 ",
      maroon: "#eba0ac",
      peach: "#fab387 ",
      yellow: "#f9e2af",
      green: "#a6e3a1 ",
      teal: "#94e2d5 ",
      sky: "#89dceb",
      sapphire: "#74c7ec",
      blue: "#89b4fa",
      lavender: "#b4befe",

      // Text
      text: "#cdd6f4 ",
      subtext1: "#bac2de",
      subtext0: "#a6adc8 ",

      // Misc
      borderRadius: "1rem",
    },
  },
});
export default theme;
