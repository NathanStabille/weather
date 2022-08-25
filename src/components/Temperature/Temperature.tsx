import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import thermometer from "../../assets/thermometer.png";
import { TemperatureChart } from "../TemperatureChart/TemperatureChart";

export const Temperature = () => {
  const { dailyWeather } = useWeatherContext();
  const { units } = useUnitsContext();
  const theme = useTheme();

  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      width="550px"
      borderRadius="30px"
      padding={3}
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      ml={lgDown ? 0 : 10}
      mt={lgDown ? 5 : 0}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      bgcolor={theme.palette.primary.light}
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <img
            src={thermometer}
            alt="thermometer"
            style={{
              maxWidth: "60px",
              backgroundColor: theme.palette.background.default,
              borderRadius: "50%",
              padding: 5,
            }}
          ></img>
          <Typography fontSize="1.5rem" ml={3}>
            Temperature
          </Typography>
        </Box>
        <Box
          bgcolor={theme.palette.background.default}
          paddingX={2}
          paddingY={1}
          borderRadius={5}
        >
          <Typography fontSize="1.5rem">
            {` Max  ${Math.round(dailyWeather.tempMax)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
          <Typography fontSize="1.5rem">
            {` Min ${Math.round(dailyWeather.tempMin)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
        </Box>
      </Box>

      <Box width="80%">
        <TemperatureChart />
      </Box>

      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        textAlign="center"
      >
        <Box>
          <Typography fontWeight="300" fontSize="1.1rem">
            {`${Math.round(dailyWeather.tempMorn)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
          <Typography fontWeight="300" fontSize="1.1rem">
            Morning
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="300" fontSize="1.1rem">
            {`${Math.round(dailyWeather.tempDay)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
          <Typography fontWeight="300" fontSize="1.1rem">
            Day
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="300" fontSize="1.1rem">
            {`${Math.round(dailyWeather.tempEve)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
          <Typography fontWeight="300" fontSize="1.1rem">
            Evening
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="300" fontSize="1.1rem">
            {`${Math.round(dailyWeather.tempNight)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
          <Typography fontWeight="300" fontSize="1.1rem">
            Night
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
