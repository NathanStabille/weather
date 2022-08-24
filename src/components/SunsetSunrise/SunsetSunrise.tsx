import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import "./style.css";

export const SunsetSunrise = () => {
  const { currentWeather, dailyWeather } = useWeatherContext();

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
      {/* sunset/sunrise */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box className="hot">
          <span className="sun"></span>
          <span className="sunx"></span>

          <Box textAlign="center" mb={5}>
            <img src={sunrise} alt="" style={{ width: "50px" }} />
            <Typography fontWeight="300" fontSize="1.2rem">
              Sunrise
            </Typography>
            <Typography fontWeight="300" fontSize="1.2rem">
              {`0${getHour(dailyWeather.sunrise)}`}
            </Typography>
          </Box>
          <Box textAlign="center">
            <img src={sunset} alt="" style={{ width: "50px" }} />
            <Typography fontWeight="300" fontSize="1.2rem">
              Sunset
            </Typography>
            <Typography fontWeight="300" fontSize="1.2rem">
              {getHour(dailyWeather.sunset)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
