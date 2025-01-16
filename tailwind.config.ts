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
      primary: "#1A4331",
      secondary: "#333333",
      green: "#3CAD68",
      darkGreen: "#28864c",
      lightGreen: "#edf5f0",
      black: "#1a1a1a",
      white: "#ffffff",
      gray: "#666666",
      lightGray: "#e6e6e6",
      tomato: "#DF5357",
      darkTomato: "#c43f44",
      indigo: "#607ABF",
      darkIndigo: "#4f5f9f",
      purple: "#7565A0",
      darkPurple: "#5f4f8f",
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
