import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useWeatherContext } from "../../context/WeatherContext";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import "./style.css";
import { DateTime } from "luxon";

export const SunsetSunrise = () => {
  const theme = useTheme();
  const { dailyWeather } = useWeatherContext();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const getHour = (unix: number, zone: string, format = "t") =>
    DateTime.fromSeconds(unix).setZone(zone).toFormat(format);

  return (
    <Box width="150px" mr={lgDown ? -3 : 0}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box className="hot">
          <span className="sun"></span>
          <span className="sunx"></span>

          {dailyWeather.sunrise ? (
            <>
              <Box textAlign="center" mb={5}>
                <img src={sunrise} alt="" style={{ width: "50px" }} />
                <Typography fontWeight="300" fontSize="1.2rem">
                  Sunrise
                </Typography>
                <Typography fontWeight="300" fontSize="1.2rem">
                  {getHour(dailyWeather.sunrise, dailyWeather.timezone)}
                </Typography>
              </Box>
              <Box textAlign="center">
                <img src={sunset} alt="" style={{ width: "50px" }} />
                <Typography fontWeight="300" fontSize="1.2rem">
                  Sunset
                </Typography>
                <Typography fontWeight="300" fontSize="1.2rem">
                  {getHour(dailyWeather.sunset, dailyWeather.timezone)}
                </Typography>
              </Box>
            </>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
    </Box>
  );
};
