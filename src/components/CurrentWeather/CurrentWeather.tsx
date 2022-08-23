import { Box, Typography, useTheme } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import landscape from "../../assets/landscapes.jpg";

export const CurrentWeather = () => {
  const theme = useTheme();

  const { currentWeather } = useWeatherContext();
  const { units } = useUnitsContext();

  return (
    <Box
      width="550px"
      borderRadius="30px"
      padding={5}
      display="flex"
      flexDirection="column"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      sx={{ backgroundImage: `url(${landscape})`, backgroundSize: "550px" }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
            alt=""
            style={{
              backgroundColor: theme.palette.primary.light,
              borderRadius: "50%",
              maxWidth: "50px",
            }}
          />

          <Box ml={2}>
            <Typography fontSize="1.5rem">Weather</Typography>
            <Typography>What's the weather.</Typography>
          </Box>
        </Box>

        {/* FeelsLike */}
        <Box display="flex" alignItems="center">
          <Typography mr={1}>Feels Like</Typography>
          <Typography
            fontSize="1.3rem"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 3,
              paddingX: 1,
            }}
          >
            {`${Math.round(currentWeather.feelsLike)}°${units.toUpperCase()}`}
          </Typography>
        </Box>
      </Box>

      {/* Temp */}
      <Typography marginTop={5} fontSize="3rem">{`${Math.round(
        currentWeather.temp
      )}°${units.toUpperCase()} `}</Typography>

      {/* climate */}
      <Typography marginBottom={6} textTransform="capitalize">
        {currentWeather.description}
      </Typography>

      <Box display="flex" width="100%" justifyContent="space-between">
        {/* pressure */}
        <Box
          padding={3}
          bgcolor={theme.palette.text.primary}
          color={theme.palette.background.paper}
          borderRadius={5}
          textAlign="center"
        >
          <Typography fontWeight="200">Pressure</Typography>
          <Typography fontSize="1.5rem">{`${currentWeather.pressure}mb`}</Typography>
        </Box>

        {/* visibility */}
        <Box
          padding={3}
          bgcolor={theme.palette.primary.dark}
          borderRadius={5}
          textAlign="center"
        >
          <Typography fontWeight="200">Visibility</Typography>
          <Typography fontSize="1.5rem">
            {units === "c"
              ? `${(currentWeather.visibility / 1000).toFixed(1)} km`
              : `${(currentWeather.visibility * 0.000621371192).toFixed(1)} mi`}
          </Typography>
        </Box>

        {/* humadity */}
        <Box
          padding={3}
          bgcolor={theme.palette.text.secondary}
          color={theme.palette.text.primary}
          borderRadius={5}
          textAlign="center"
        >
          <Typography fontWeight="200">Humadity</Typography>
          <Typography fontSize="1.5rem">{`${currentWeather.humidity}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
