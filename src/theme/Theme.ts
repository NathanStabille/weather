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
      light: "#E54D16",
    },

    text: {
      primary: "#F1F5F7",
      secondary: "#000748",
    },

    background: {
      default: "#1C2023",
      paper: "#100F14",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "0px",
        },
        body: {
          transition: "0.3s",
        },
      },
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
      light: "#E54D16",
    },

    text: {
      primary: "#000748",
      secondary: "#F1F5F7",
    },

    background: {
      default: "#D2DAE2",
      paper: "#F7F7F9",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "0px",
        },
        body: {
          transition: "0.3s",
        },
      },
    },
  },
});
