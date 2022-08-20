import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppThemeProvider } from "./context/ThemeContext";
import { UnitsProvider } from "./context/UnitsContext";
import { WeatherProvider } from "./context/WeatherContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <WeatherProvider>
        <UnitsProvider>
          <App />
        </UnitsProvider>
      </WeatherProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
