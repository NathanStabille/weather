import { Box, Divider, useTheme } from "@mui/material";
import { WeatherInfo } from "./components/WeatherInfo/WeatherInfo";
import { SearchCity } from "./components/SearchCity/SearchCity";
import { SunsetSunrise } from "./components/SunsetSunrise/SunsetSunrise";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { WeatherPrediction } from "./components/WeatherPrediction/WeatherPredition";

export const App = () => {
  const theme = useTheme();

  return (
    <Box
      width="100vw"
      height="100vh"
      paddingX="2%"
      paddingY="1%"
      bgcolor={theme.palette.background.paper}
      display="flex"
      sx={{ userSelect: "none" }}
    >
      <Box display="flex" flexDirection="column">
        <SearchCity />

        <Box display="flex">
          <CurrentWeather />
          <WeatherInfo />
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          marginX: 5,
          backgroundColor: theme.palette.text.primary,
          opacity: 0.3,
        }}
      />
      <Box paddingX={3} width="100%">
        <SunsetSunrise />
        <WeatherPrediction />
      </Box>
    </Box>
  );
};
