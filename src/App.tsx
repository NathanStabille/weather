import { Box, useTheme } from "@mui/material";
import { AirQualityBox } from "./components/AirQualityBox/AirQualityBox";
import { Search } from "./components/Search/Search";
import { WeatherBox } from "./components/WeatherBox/WeatherBox";

export const App = () => {
  const theme = useTheme();

  return (
    <Box
      width="100vw"
      height="100vh"
      padding="3%"
      bgcolor={theme.palette.background.paper}
      sx={{ userSelect: "none" }}
    >
      <Search />

      <Box display="flex">
        <WeatherBox />
        <AirQualityBox />
      </Box>
    </Box>
  );
};
