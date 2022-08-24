import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

interface IPredictionBoxProps {
  iconName: string;
  forecastWeather: string;
  tempMax: number;
  tempMin: number;
  pressure: number;
  humidity: number;
}

export const PredictionBox = ({
  iconName,
  forecastWeather,
  tempMax,
  tempMin,
  pressure,
  humidity,
}: IPredictionBoxProps) => {
  const theme = useTheme();

  return (
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
                src={`http://openweathermap.org/img/wn/${iconName}@2x.png`}
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
                <Typography fontSize="1.5rem">{forecastWeather}</Typography>
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
            textAlign: "center",
          }}
        >
          <Box>
            <Typography fontWeight="200">Pressure</Typography>
            <Typography fontSize="1.5rem">{`${pressure}mb`}</Typography>
          </Box>

          <Box>
            <Typography fontWeight="200">Humadity</Typography>
            <Typography fontSize="1.5rem">{`${humidity}%`}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
