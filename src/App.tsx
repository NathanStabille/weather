import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { InputSearch } from "./components/InputSearch/InputSearch";
import { AppThemeProvider } from "./context/ThemeContext";
import { Layout } from "./layout/Layout";
import { getWeatherAll } from "./services/api/weatherAPI";
import { WeatherType } from "./types/WeatherType";

export const App = () => {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //   });
  // }, []);

  const [appWeather, setAppWeather] = useState({} as WeatherType);

  useEffect(() => {
    const getWeather = async () => {
      setAppWeather(await getWeatherAll("rio de janeiro", "metric"));
    };

    getWeather();
  }, []);

  return (
    <AppThemeProvider>
      <CssBaseline />
      <Layout>
        <InputSearch appWeather={appWeather} setAppWeather={setAppWeather}/>

        <h1>{appWeather.city}</h1>
        <h1>Temp {appWeather.temp}</h1>
      </Layout>
    </AppThemeProvider>
  );
};
