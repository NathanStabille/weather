import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";

export const SunsetSunrise = () => {
  const { currentWeather } = useWeatherContext();
  const { units } = useUnitsContext();
  const theme = useTheme();

  const getHour = (unix: number) => {
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = `${hours}:${
      minutes.substring(1).length <= 1
        ? `0${minutes.substring(1)}`
        : minutes.substring(1)
    }h`;

    return formattedTime;
  };

  return (
    <Box>
      {/* city name */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography fontSize="2rem">{currentWeather.weather}</Typography>
          <Typography fontSize="1.3rem">{`${currentWeather.city}`}</Typography>
        </Box>
        <Typography fontSize="3rem" color={theme.palette.primary.dark}>
          {`${Math.round(currentWeather.temp)}°${units.toUpperCase()}`}
        </Typography>
      </Box>
      {/* divider */}
      <Divider
        sx={{
          marginY: 3,
          background: theme.palette.text.primary,
          opacity: 0.3,
        }}
      />

      {/* sunset/sunrise */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box textAlign="center">
          <img src={sunrise} alt="" style={{ width: "50px" }} />
          <Typography>Sunrise</Typography>
          <Typography>{`0${getHour(currentWeather.sunrise)}`}</Typography>
        </Box>
        <Box textAlign="center">
          <img src={sunset} alt="" style={{ width: "50px" }} />
          <Typography>Sunset</Typography>
          <Typography>{getHour(currentWeather.sunset)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
