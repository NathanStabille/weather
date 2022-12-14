import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Temperature } from "./components/Temperature/Temperature";
import { SearchCity } from "./components/SearchCity/SearchCity";
import { SunsetSunrise } from "./components/SunsetSunrise/SunsetSunrise";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { WeatherPrediction } from "./components/WeatherPrediction/WeatherPredition";
import { useWeatherContext } from "./context/WeatherContext";
import { useUnitsContext } from "./context/UnitsContext";
import { MoonsetMoonrise } from "./components/MoonsetMoonrise/MoonsetMoonrise";
import { UVIBox } from "./components/UVIBox/UVIBox";
import { WindInfo } from "./components/WindInfo/WindInfo";
import { Moonphase } from "./components/Moonphase/Moonphase";

export const App = () => {
  const theme = useTheme();
  const { currentWeather } = useWeatherContext();
  const { units } = useUnitsContext();

  const xlDown = useMediaQuery("(max-width:1400px)");
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      width="100vw"
      height="100vh"
      paddingX="2%"
      paddingY="1%"
      bgcolor={theme.palette.background.paper}
      display="flex"
      flexDirection={xlDown ? "column" : "row"}
      sx={{ userSelect: "none" }}
    >
      <Box display="flex" flexDirection="column">
        <SearchCity />

        <Box
          display="flex"
          justifyContent="center"
          flexDirection={lgDown ? "column" : "row"}
          alignItems={lgDown ? "center" : ""}
          width={xlDown ? "100%" : "65vw"}
        >
          <CurrentWeather />
          <Temperature />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          mt='5%'
          justifyContent="space-evenly"
          flexDirection={lgDown ? "column" : "row"}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={lgDown ? 5 : 0}
            mr={lgDown ? 0 : 3}
          >
            <SunsetSunrise />
            <MoonsetMoonrise />
          </Box>

          <WindInfo />
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            ml={lgDown ? 0 : 4}
          >
            <UVIBox />
            <Moonphase />
          </Box>
        </Box>
      </Box>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          marginX: 3,
          backgroundColor: theme.palette.text.primary,
          opacity: 0.3,
        }}
      />

      <Box paddingX={2} width="100%" mt={xlDown ? 5 : 0} mb={xlDown ? 8 : 0}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography fontSize="2rem">{currentWeather.weather}</Typography>
            <Typography fontSize="1.3rem">{`${currentWeather.city}`}</Typography>
          </Box>
          <Typography fontSize="3rem" color={theme.palette.primary.dark}>
            {`${Math.round(currentWeather.temp)}??${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
        </Box>
        <Divider
          sx={{
            marginTop: 3,
            background: theme.palette.text.primary,
            opacity: 0.3,
          }}
        />

        <WeatherPrediction />
      </Box>
    </Box>
  );
};
