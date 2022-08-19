import { createTheme } from "@mui/material";

export const Dark = createTheme({
  typography: {
    fontFamily: "Lexend",
  },

  palette: {
    primary: {
      main: "#F1F5F7",
      dark: "",
      light: "",
      contrastText: "#0E080C",
    },

    secondary: {
      main: "#FFF",
      dark: "#555A60",
    },

    text: {
      primary: "#F1F5F7",
    },

    background: {
      default: "#1C2023",
      paper: "#100F14",
    },
  },
});

export const Light = createTheme({
  typography: {
    fontFamily: "Lexend",
  },

  palette: {
    primary: {
      main: "#F1F5F7",
      dark: "",
      light: "",
      contrastText: "#0E080C",
    },

    secondary: {
      main: "#000748",
      dark: "#555A60",
    },

    text: {
      primary: "#000748",
    },

    background: {
      default: "#D2DAE2",
      paper: "#F7F7F9",
    },
  },
});
