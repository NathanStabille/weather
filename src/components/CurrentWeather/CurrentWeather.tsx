import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";

export const CurrentWeather = () => {
  const theme = useTheme();

  const { currentWeather } = useWeatherContext();
  const { units } = useUnitsContext();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      maxWidth="550px"
      width="100%"
      borderRadius="30px"
      padding={smDown ? 2 : 5}
      display="flex"
      flexDirection="column"
      boxShadow={smDown ? "none" : "0 4px 30px rgba(0, 0, 0, 0.1)"}
      bgcolor={smDown ? "transparent" : theme.palette.primary.light}
    >
      <Box
        display="flex"
        alignItems="center"
        textAlign={smDown ? "center" : "left"}
        justifyContent="space-between"
        flexDirection={smDown ? "column" : "row"}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection={smDown ? "column" : "row"}
        >
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
            alt=""
            style={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "50%",
              maxWidth: "60px",
            }}
          />

          <Box ml={smDown ? 0 : 2}>
            <Typography fontSize="1.5rem">Weather</Typography>
            <Typography>What's the weather.</Typography>
          </Box>
        </Box>

        {/* FeelsLike */}
        <Box
          display="flex"
          alignItems="center"
          flexDirection={smDown ? "column" : "row"}
        >
          <Typography mr={smDown ? 0 : 1}>Feels Like</Typography>
          <Typography
            fontSize="1.3rem"
            sx={{
              backgroundColor: smDown
                ? theme.palette.primary.dark
                : theme.palette.background.paper,
              borderRadius: 3,
              paddingX: 1,
            }}
          >
            {`${Math.round(currentWeather.feelsLike)}°${
              units === "metric" ? "C" : "F"
            }`}
          </Typography>
        </Box>
      </Box>

      {/* Temp */}
      <Typography
        marginTop={5}
        fontSize="3rem"
        textAlign={smDown ? "center" : "left"}
      >
        {`${Math.round(currentWeather.temp)}°${
          units === "metric" ? "C" : "F"
        } `}
      </Typography>

      {/* climate */}
      <Typography
        marginBottom={6}
        textTransform="capitalize"
        textAlign={smDown ? "center" : "left"}
      >
        {currentWeather.description}
      </Typography>

      <Box display="flex" width="100%" justifyContent="space-between">
        {/* pressure */}
        <Box
          padding={smDown ? 1 : 3}
          bgcolor={theme.palette.primary.dark}
          color={theme.palette.text.primary}
          borderRadius={5}
          textAlign="center"
          width="100%"
          mr={smDown ? 1 : 3}
        >
          <Typography fontWeight="200">Pressure</Typography>
          <Typography fontSize={smDown ? "1rem" : "1.5rem"}>{`${
            currentWeather.pressure ? currentWeather.pressure : "0"
          }mb`}</Typography>
        </Box>

        {/* visibility */}
        <Box
          padding={smDown ? 1 : 3}
          bgcolor={theme.palette.primary.dark}
          borderRadius={5}
          textAlign="center"
          width="100%"
          mr={smDown ? 1 : 3}
        >
          <Typography fontWeight="200">Visibility</Typography>
          <Typography fontSize={smDown ? "1rem" : "1.5rem"}>
            {units === "metric"
              ? `${(currentWeather.visibility / 1000).toFixed(1)} km`
              : `${(currentWeather.visibility * 0.000621371192).toFixed(1)} mi`}
          </Typography>
        </Box>

        {/* humadity */}
        <Box
          padding={smDown ? 1 : 3}
          bgcolor={theme.palette.primary.dark}
          color={theme.palette.text.primary}
          borderRadius={5}
          textAlign="center"
          width="100%"
        >
          <Typography fontWeight="200">Humadity</Typography>
          <Typography fontSize={smDown ? "1rem" : "1.5rem"}>{`${
            currentWeather.humidity ? currentWeather.humidity : "0"
          }%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
