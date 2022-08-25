import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { DateTime } from "luxon";

interface IPredictionBoxProps {
  iconName: string;
  forecastWeather?: string;
  tempMax: number;
  tempMin: number;
  pressure: number;
  humidity: number;
  date: number;
  weatherDescription: string;
  clouds: number;
  timezone: string;
  rain: number;
  sunset: number;
  sunrise: number;
}

export const PredictionBox = ({
  iconName,
  forecastWeather,
  tempMax,
  tempMin,
  pressure,
  humidity,
  date,
  weatherDescription,
  clouds,
  timezone,
  rain,
  sunset,
  sunrise,
}: IPredictionBoxProps) => {
  const theme = useTheme();

  const getDate = (dt: number) => DateTime.fromSeconds(dt).toFormat("cccc, dd");

  const getHour = (unix: number, zone: string, format = "t") =>
    DateTime.fromSeconds(unix).setZone(zone).toFormat(format);

  return (
    <Box width="100%" mb={2}>
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
                src={`http://openweathermap.org/img/wn/${iconName}@2x.png`}
                alt=""
              />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Typography fontSize="1.1rem" fontWeight="300">
                  {getDate(date)}
                </Typography>

                <Typography fontSize="1.5rem">{forecastWeather}</Typography>
                <Typography fontSize="1rem" fontWeight="300">
                  {weatherDescription}
                </Typography>
              </Box>
            </Box>
            <Typography fontSize="2rem" color={theme.palette.primary.dark}>
              {`${Math.round(tempMax)}° / ${Math.round(tempMin)}°`}
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <Typography fontWeight="300">Pressure</Typography>
              <Typography fontSize="1.2rem">{pressure}</Typography>
            </Box>

            <Box>
              <Typography fontWeight="300">Humadity</Typography>
              <Typography fontSize="1.2rem">{humidity}</Typography>
            </Box>
          </Box>

          <Box color="#fa7900">
            <Box>
              <Typography fontWeight="300">Sunrise</Typography>
              <Typography fontSize="1.2rem">
                {getHour(sunrise, timezone)}
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight="300">Sunset</Typography>
              <Typography fontSize="1.2rem">
                {getHour(sunset, timezone)}
              </Typography>
            </Box>
          </Box>

          <Box color="#0092FE">
            <Box>
              <Typography fontWeight="300">Clouds</Typography>
              <Typography fontSize="1.2rem">{`${clouds}%`}</Typography>
            </Box>

            <Box>
              <Typography fontWeight="300">Rain</Typography>
              <Typography fontSize="1.2rem">
                {rain ? `${rain}mm` : "0mm"}
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
