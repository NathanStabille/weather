import { Box, Divider, useTheme } from "@mui/material";
import { InfoBox } from "./components/InfoBox/InfoBox";
import { Search } from "./components/Search/Search";
import { SunBox } from "./components/SunBox/SunBox";
import { WeatherBox } from "./components/WeatherBox/WeatherBox";

export const App = () => {
  const theme = useTheme();

  return (
    <Box
      width="100vw"
      height="100vh"
      paddingX="2%"
      paddingY="1%"
      bgcolor={theme.palette.background.paper}
      display="flex"
      sx={{ userSelect: "none" }}
    >
      <Box display="flex" flexDirection="column">
        <Search />

        <Box display="flex">
          <WeatherBox />
          <InfoBox />
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          marginX: 5,
          backgroundColor: theme.palette.text.primary,
          opacity: 0.5,
        }}
      />
      <Box paddingX={3} width="100%">
        <SunBox />
      </Box>
    </Box>
  );
};
