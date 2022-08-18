import { Box, CssBaseline } from "@mui/material";
import { useState, useEffect } from "react";
import { AppThemeProvider } from "./context/ThemeContext";
import { Layout } from "./layout/Layout";
import { getWeatherAll } from "./services/api/weatherAPI";

export const App = () => {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //   });
  // }, []);

  return (
    <AppThemeProvider>
      <CssBaseline />
      <Layout>
        asdasd
      </Layout>
    </AppThemeProvider>
  );
};
