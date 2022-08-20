import { Box, useTheme } from "@mui/material";
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
      <WeatherBox />
    </Box>
  );
};
