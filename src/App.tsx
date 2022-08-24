import { Box, Divider, Typography, useTheme } from "@mui/material";
import { WeatherInfo } from "./components/WeatherInfo/WeatherInfo";
import { SearchCity } from "./components/SearchCity/SearchCity";
import { SunsetSunrise } from "./components/SunsetSunrise/SunsetSunrise";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { WeatherPrediction } from "./components/WeatherPrediction/WeatherPredition";
import { useWeatherContext } from "./context/WeatherContext";
import { useUnitsContext } from "./context/UnitsContext";
import { MoonriseMoonset } from "./components/MoonriseMoonset/MoonriseMoonset";
import { UVIBox } from "./components/UVIBox/UVIBox";

export const App = () => {
  const theme = useTheme();
  const { currentWeather } = useWeatherContext();
  const { units } = useUnitsContext();

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

        <Box display="flex">
          <SunsetSunrise />
          <MoonriseMoonset />
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
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography fontSize="2rem">{currentWeather.weather}</Typography>
            <Typography fontSize="1.3rem">{`${currentWeather.city}`}</Typography>
          </Box>
          <Typography fontSize="3rem" color={theme.palette.primary.dark}>
            {`${Math.round(currentWeather.temp)}°${units.toUpperCase()}`}
          </Typography>
        </Box>
        <Divider
          sx={{
            marginY: 3,
            background: theme.palette.text.primary,
            opacity: 0.3,
          }}
        />

        <UVIBox />
        <WeatherPrediction />
      </Box>
    </Box>
  );
};
