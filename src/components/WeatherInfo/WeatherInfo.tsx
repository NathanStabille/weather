import { Box, Typography, useTheme } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import thermometer from "../../assets/thermometer.png";
import clouds from "../../assets/clouds.png";
import wind from "../../assets/wind.png";
import forest from "../../assets/forest.jpg";

export const WeatherInfo = () => {
  const { currentWeather } = useWeatherContext();
  const { units } = useUnitsContext();
  const theme = useTheme();

  const getDirection = (angle: number) => {
    var directions = [
      "North",
      "North East",
      "East",
      "South East",
      "South",
      "South West",
      "West",
      "North West",
    ];
    var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
  };

  return (
    <Box
      width="550px"
      borderRadius="30px"
      padding={5}
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      ml={10}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        backgroundImage: `url(${forest})`,
        backgroundSize: "auto 432px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Temp max/min */}
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <img
            src={thermometer}
            alt=""
            style={{
              maxWidth: "55px",
            }}
          />
          {/* <Box borderRadius={3} padding={1} paddingX={2}>
            <Typography fontSize="1.5rem">
              {` Max  ${Math.round(weather.tempMax)}°${units.toUpperCase()}`}
            </Typography>

            <Typography fontSize="1.5rem">
              {`Min  ${Math.round(weather.tempMin)}°${units.toUpperCase()}`}
            </Typography>
          </Box> */}
        </Box>
        {/* Clouds */}
        <Box display="flex" alignItems="center">
          <img
            src={clouds}
            alt=""
            style={{
              maxWidth: "55px",
            }}
          />
          <Box textAlign="center" paddingX={2}>
            <Typography fontSize="1.5rem">Clouds</Typography>
            <Typography
              fontSize="1.2rem"
              bgcolor={theme.palette.text.primary}
              color={theme.palette.text.secondary}
              borderRadius={3}
            >
              {`${currentWeather.clouds}%`}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        width="100%"
        bgcolor={theme.palette.background.default}
        padding={2}
        borderRadius={10}
        display="flex"
        alignItems="center"
      >
        <img
          src={wind}
          alt=""
          style={{
            maxWidth: "70px",
          }}
        />

        <Box ml={3} width="100%">
          <Typography fontSize="1.5rem">Wind</Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontSize="1.2rem">
              {getDirection(currentWeather.windDeg)}
            </Typography>
            <Typography>
              {units === "c"
                ? `${(currentWeather.windSpeed * 3.6).toFixed(1)} km/h`
                : `${currentWeather.windSpeed} mph`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
