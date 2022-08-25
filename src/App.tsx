import { Box, Divider, Typography, useTheme } from "@mui/material";
import { Temperature } from "./components/Temperature/Temperature";
import { SearchCity } from "./components/SearchCity/SearchCity";
import { SunsetSunrise } from "./components/SunsetSunrise/SunsetSunrise";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { WeatherPrediction } from "./components/WeatherPrediction/WeatherPredition";
import { useWeatherContext } from "./context/WeatherContext";
import { useUnitsContext } from "./context/UnitsContext";
import { MoonriseMoonset } from "./components/MoonriseMoonset/MoonriseMoonset";
import { UVIBox } from "./components/UVIBox/UVIBox";
import { WindInfo } from "./components/WindInfo/WindInfo";
import { Moonphase } from "./components/Moonphase/Moonphase";

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
      sx={{ userSelect: "none", overflow: "hidden" }}
    >
      <Box display="flex" flexDirection="column">
        <SearchCity />

        <Box display="flex">
          <CurrentWeather />
          <Temperature />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          mt={8}
          justifyContent="space-evenly"
        >
          <SunsetSunrise />
          <MoonriseMoonset />
          <WindInfo />
          <Box height="100%">
            <UVIBox />
            <Moonphase />
          </Box>
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
            {`${Math.round(currentWeather.temp)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
        </Box>
        <Divider
          sx={{
            marginY: 3,
            background: theme.palette.text.primary,
            opacity: 0.3,
          }}
        />

        <WeatherPrediction />
      </Box>
    </Box>
  );
};
