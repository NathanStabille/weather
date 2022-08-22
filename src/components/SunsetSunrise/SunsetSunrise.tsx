import { Box, Divider, Typography, useTheme } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import sunAnimation from "../../assets/sunrise-sunset-animation.json";

export const SunsetSunrise = () => {
  const { weather } = useWeatherContext();
  const { units } = useUnitsContext();
  const theme = useTheme();

  const getHour = (unix: number) => {
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = `${hours}:${minutes.substring(1)}h`;

    return formattedTime;
  };

  return (
    <Box>
      {/* city name */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography fontSize="2rem">{weather.weather}</Typography>
          <Typography fontSize="1.3rem">{`${weather.city}, ${weather.country}`}</Typography>
        </Box>
        <Typography fontSize="3rem" color={theme.palette.primary.dark}>
          {`${Math.round(weather.temp)}°${units.toUpperCase()}`}
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

      {/* sunset/sunrise animation */}
      <Player autoplay loop src={sunAnimation}></Player>

      {/* sunset/sunrise */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box textAlign="center">
          <img src={sunrise} alt="" style={{ width: "50px" }} />
          <Typography>Sunrise</Typography>
          <Typography>{getHour(weather.sunrise)}</Typography>
        </Box>
        <Box textAlign="center">
          <img src={sunset} alt="" style={{ width: "50px" }} />
          <Typography>Sunset</Typography>
          <Typography>{getHour(weather.sunset)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
