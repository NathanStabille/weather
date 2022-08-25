import { Typography } from "@mui/material";
import { DateTime } from "luxon";
import { useWeatherContext } from "../../context/WeatherContext";

export const TimeAndLocation = () => {
  const { currentWeather } = useWeatherContext();

  const formatToLocalTime = (
    secs: number,
    zone: string,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  return (
    <Typography fontWeight="300" fontSize="1.1rem">
      {currentWeather.timezone
        ? formatToLocalTime(currentWeather.dt, currentWeather.timezone)
        : "Loading..."}
    </Typography>
  );
};
