import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1140px",
  xl: "1440px",
  "2xl": "1536px",
};

const colors = {
  mainPurple: "#635FC7",
  purpleHover: "#A8A4FF",
  mainRed: "#EA5555",
  redHover: "#FF9898",
  white: "#FFFFFF",
  black: "#000112",
  veryDarkGrey: "#20212C",
  darkGrey: "#2B2C37",
  lightGrey: "#F4F7FD",
  linesDark: "#3E3F4E",
  mediumGrey: "#828FA3",
  linesWhite: "#E4EBFA",
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints, colors });
