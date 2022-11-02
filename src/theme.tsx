import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "686px",
  lg: "1140px",
  xl: "1200px",
  "2xl": "1536px",
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints });
