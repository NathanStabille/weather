import { Box, useTheme } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useWeatherContext } from "../../context/WeatherContext";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const TemperatureChart = () => {
  const { dailyWeather } = useWeatherContext();
  const theme = useTheme();

  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        data: [
          dailyWeather.tempMorn,
          dailyWeather.tempDay,
          dailyWeather.tempEve,
          dailyWeather.tempNight,
        ],
        backgroundColor: theme.palette.text.primary,
        borderColor: theme.palette.primary.dark,
        pointBorderColor: theme.palette.primary.dark,
        pointBorderWidth: 6,
        tension: 0.4,
        borderWidth: 3,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <Box width="100%">
      <Line data={data} options={options}></Line>
    </Box>
  );
};
