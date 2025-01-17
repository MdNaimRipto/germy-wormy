/* eslint-disable no-undef */

import { green } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // our colors theme
    colors: {
      primary: "",
      secondary: "#F0F0F0",
      green: "#6FCF97",
      blue: "#56CCF2",
      darkBlue: "#142850",
      black: "#1a1a1a",
      white: "#ffffff",
      yellow: "#F2C94C",
      purple: " #9B51E0",
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
    },
  },

  plugins: [],
};
