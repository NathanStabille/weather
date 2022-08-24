import { createTheme } from "@mui/material";

export const Dark = createTheme({
  typography: {
    fontFamily: "Lexend",
  },

  palette: {
    primary: {
      main: "#F1F5F7",
      dark: "#DB5436",
      light: "#22272E",
      contrastText: "#0E080C",
    },

    secondary: {
      main: "#FFF",
      dark: "#000748",
      light: "#E54D16",
    },

    text: {
      primary: "#F1F5F7",
      secondary: "#000748",
    },

    background: {
      default: "#100F14",
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

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          boxSizing: "border-box",
          fontSize: "1rem",
        },
        notchedOutline: {
          border: "none",
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
      dark: "#00BFB3",
      light: "#D2DAE2",
      contrastText: "#0E080C",
    },

    secondary: {
      main: "#000748",
      dark: "#00BFB3",
      light: "#E54D16",
    },

    text: {
      primary: "#000748",
      secondary: "#F1F5F7",
    },

    background: {
      default: "#F7F7F9",
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
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          boxSizing: "border-box",
          fontSize: "1rem",
        },
        notchedOutline: {
          border: "none",
        },
      },
    },
  },
});
