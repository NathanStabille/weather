import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getForecast } from "../../services/weatherApi";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";

export const WeatherPrediction = () => {
  const theme = useTheme();

  const [forecast, setForecast] = useState([]);
  const { currentWeather } = useWeatherContext();
  const { units } = useUnitsContext();

  // useEffect(() => {
  //   const getForestWeather = async () => {
  //     setForecast(
  //       await getForecast(
  //         weather.latitude,
  //         weather.longitude,
  //         units === "c" ? "metric" : "imperial"
  //       )
  //     );
  //   };

  //   getForestWeather();
  // }, [weather]);

  
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

      <Box width="100%">
        <Accordion
          square
          sx={{
            width: "100%",
            backgroundColor: theme.palette.primary.light,
            borderRadius: 7,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMore
                sx={{
                  color: theme.palette.text.primary,
                }}
              />
            }
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <img
                  src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
                  alt=""
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography fontSize="1.1rem" fontWeight="300">
                    November 10
                  </Typography>
                  <Typography fontSize="1.5rem">{currentWeather.weather}</Typography>
                </Box>
              </Box>
              {/* <Typography
                fontSize="2rem"
                color={theme.palette.primary.dark}
              >{`${Math.round(weather.tempMax)}° / ${Math.round(
                weather.tempMin
              )}°`}</Typography> */}
            </Box>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box>
              <Typography fontWeight="200">Pressure</Typography>
              <Typography fontSize="1.5rem">{`${currentWeather.pressure}mb`}</Typography>
            </Box>

            <Box>
              <Typography fontWeight="200">Visibility</Typography>
              <Typography fontSize="1.5rem">
                {units === "c"
                  ? `${(currentWeather.visibility / 1000).toFixed(1)} km`
                  : `${(currentWeather.visibility * 0.000621371192).toFixed(1)} mi`}
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight="200">Humadity</Typography>
              <Typography fontSize="1.5rem">{`${currentWeather.humidity}%`}</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
