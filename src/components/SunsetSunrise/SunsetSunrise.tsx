import { Box, CircularProgress, Typography } from "@mui/material";
import { useWeatherContext } from "../../context/WeatherContext";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import "./style.css";
import { DateTime } from "luxon";

export const SunsetSunrise = () => {
  const { dailyWeather } = useWeatherContext();

  const getHour = (unix: number, zone: string, format = "t") =>
    DateTime.fromSeconds(unix).setZone(zone).toFormat(format);

  return (
    <Box>
      {/* sunset/sunrise */}
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
