import { Box, Typography } from "@mui/material";
import { useWeatherContext } from "../../context/WeatherContext";
import { PredictionBox } from "../PredictionBox/PredictionBox";
import { DailyWeatherType } from "../../types/WeatherTypes";

export const WeatherPrediction = () => {
  const { forecastFormatted } = useWeatherContext();

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontSize="2.5rem" marginY={2} textAlign="center">
        Weather Preditction
      </Typography>

      {forecastFormatted.map((item: DailyWeatherType) => {
        return (
          <PredictionBox
            iconName={item.weatherIcon}
            forecastWeather={item.weatherMain}
            humidity={item.humidity}
            pressure={item.pressure}
            tempMax={item.tempMax}
            tempMin={item.tempMin}
          />
        );
      })}
    </Box>
  );
};
