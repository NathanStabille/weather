import { Box, Typography } from "@mui/material";
import { useWeatherContext } from "../../context/WeatherContext";
import moonrise from "../../assets/moonrise.png";
import moonset from "../../assets/moonset.png";
import "./style.css";

export const MoonriseMoonset = () => {
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
        <Box className="night">
          <span className="moon"></span>
          <span className="spot1"></span>
          <span className="spot2"></span>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <Box textAlign="center" mb={5}>
            <img src={moonrise} alt="" style={{ width: "50px" }} />
            <Typography fontWeight="300" fontSize="1.2rem">
              Moonrise
            </Typography>
            <Typography fontWeight="300" fontSize="1.2rem">
              {`0${getHour(dailyWeather.moonrise)}`}
            </Typography>
          </Box>
          <Box textAlign="center">
            <img src={moonset} alt="" style={{ width: "50px" }} />
            <Typography fontWeight="300" fontSize="1.2rem">
              Moonset
            </Typography>
            <Typography fontWeight="300" fontSize="1.2rem">
              {getHour(dailyWeather.moonset)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
