import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useWeatherContext } from "../../context/WeatherContext";
import moonrise from "../../assets/moonrise.png";
import moonset from "../../assets/moonset.png";
import "./style.css";
import { DateTime } from "luxon";

export const MoonsetMoonrise = () => {
  const { dailyWeather, currentWeather } = useWeatherContext();

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const getHour = (unix: number, zone: string, format = "t") =>
    DateTime.fromSeconds(unix).setZone(zone).toFormat(format);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      ml={5}
    >
      <Box className="night">
        <span className="moon"></span>
        <span className="spot1"></span>
        <span className="spot2"></span>

        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        {dailyWeather.moonrise ? (
          <>
            <Box textAlign="center" mb={5}>
              <img src={moonrise} alt="" style={{ width: "50px" }} />
              <Typography fontWeight="300" fontSize="1.2rem">
                Moonrise
              </Typography>
              <Typography fontWeight="300" fontSize="1.2rem">
                {getHour(dailyWeather.moonrise, currentWeather.timezone)}
              </Typography>
            </Box>
            <Box textAlign="center">
              <img src={moonset} alt="" style={{ width: "50px" }} />
              <Typography fontWeight="300" fontSize="1.2rem">
                Moonset
              </Typography>
              <Typography fontWeight="300" fontSize="1.2rem">
                {getHour(dailyWeather.moonset, currentWeather.timezone)}
              </Typography>
            </Box>
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Box>
  );
};
