import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import wind from "../../assets/wind.png";
import clouds from "../../assets/clouds.png";
import rain from "../../assets/rain.png";
import "./style.css";

export const WindInfo = () => {
  const theme = useTheme();
  const { units } = useUnitsContext();
  const { currentWeather, dailyWeather } = useWeatherContext();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const getDirection = (angle: number) => {
    let directions = [
      "North",
      "North East",
      "East",
      "South East",
      "South",
      "South West",
      "West",
      "North West",
    ];
    let index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
  };

  return (
    <Box height="100%" mb={lgDown ? 5 : 0}>
      <Box
        className="cloudy"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <span className="cloud"></span>
        <span className="cloud"></span>

        <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
          <img
            src={clouds}
            alt="cloud"
            style={{
              maxWidth: "60px",
            }}
          />

          <Box textAlign="center" paddingX={2}>
            <Typography fontSize="1.5rem" fontWeight="300">
              Clouds
            </Typography>
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

        <Box display="flex" mb={3}>
          <img
            src={rain}
            alt="rain"
            style={{
              maxWidth: "60px",
            }}
          />

          <Box textAlign="center" paddingX={2}>
            <Typography fontSize="1.5rem" fontWeight="300">
              Rain
            </Typography>
            <Typography
              fontSize="1.2rem"
              bgcolor={theme.palette.text.primary}
              color={theme.palette.text.secondary}
              borderRadius={3}
              paddingX={1}
            >
              {`${dailyWeather.rain ? dailyWeather.rain : "0"}mm`}
            </Typography>
          </Box>
        </Box>

        <Box
          width="100%"
          bgcolor={theme.palette.background.default}
          paddingY={2}
          paddingX={3}
          borderRadius={15}
          display="flex"
          alignItems="center"
        >
          <img
            src={wind}
            alt="wind"
            style={{
              maxWidth: "70px",
            }}
          />

          <Box ml={2} width="100%">
            <Typography fontSize="1.5rem">Wind</Typography>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize="1.2rem" fontWeight="300">
                {getDirection(currentWeather.windDeg)}
              </Typography>
              <Typography ml={5} fontWeight="300">
                {units === "metric"
                  ? `${(currentWeather.windSpeed * 3.6).toFixed(1)} km/h`
                  : `${currentWeather.windSpeed} mph`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
