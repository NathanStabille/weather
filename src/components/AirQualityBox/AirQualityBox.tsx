import { Box } from "@mui/material";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";

export const AirQualityBox = () => {
  const { weather } = useWeatherContext();
  const { units } = useUnitsContext();

  const getDirection = (angle: number) => {
    var directions = [
      "North",
      "North East",
      "East",
      "South East",
      "South",
      "South West",
      "West",
      "North West",
    ];
    var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
  };

  return (
    <Box width="550px" borderRadius="30px" padding={5} >
      {getDirection(weather.windDeg)}
      {units === "c"
        ? `${(weather.windSpeed * 3.6).toFixed(1)} km/h`
        : `${weather.windSpeed} mph`}
    </Box>
  );
};
