import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import sun from "../../assets/sun.png";
import { useWeatherContext } from "../../context/WeatherContext";

interface IUviData {
  uv: string;
  color: string;
}

export const UVIBox = () => {
  const { dailyWeather } = useWeatherContext();
  const [uvi, setUvi] = useState({} as IUviData);

  const theme = useTheme();

  const UVLevel = () => {
    switch (Math.round(dailyWeather.uvi)) {
      case 1:
      case 2:
        setUvi({ uv: "Low", color: "#44A43D" });
        break;
      case 3:
      case 4:
      case 5:
        setUvi({ uv: "Moderate", color: "#FFEC00" });
        break;

      case 6:
      case 7:
        setUvi({ uv: "High", color: "#FF8B00" });
        break;

      case 8:
      case 9:
      case 10:
        setUvi({ uv: "Very High", color: "#D60000" });
        break;
    }
  };

  useEffect(() => {
    UVLevel();
  }, [dailyWeather.uvi]);

  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={theme.palette.primary.light}
      borderRadius={7}
      padding={2}
    >
      <img src={sun} alt="sun" style={{ width: "90px", margin: "0px 15px" }} />
      <Box display="flex" flexDirection="column" ml={3}>
        <Box display="flex" alignItems="center">
          <Typography fontSize="2rem">
            {Math.round(dailyWeather.uvi)} UVI
          </Typography>
          <Typography
            fontSize="1.2rem"
            fontWeight="300"
            sx={{
              backgroundColor: uvi.color,
              borderRadius: "15px",
              paddingX: 2,
              marginLeft: 2,
            }}
          >
            {uvi.uv}
          </Typography>
        </Box>
        <Typography fontWeight="300">{`${uvi.uv} risk of from UV rays`}</Typography>
      </Box>
    </Box>
  );
};
