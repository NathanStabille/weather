import "./style.css";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import fullMoon from "../../assets/moonphase/full-moon.png";
import firstQuarter from "../../assets/moonphase/first-quarter.png";
import lastQuarter from "../../assets/moonphase/last-quarter.png";
import newMoon from "../../assets/moonphase/new-moon.png";
import waningCrescent from "../../assets/moonphase/waning-crescent.png";
import wainingGibbous from "../../assets/moonphase/waxing-gibbous.png";
import waxingCrescent from "../../assets/moonphase/waning-gibbous.png";
import waxingGibbous from "../../assets/moonphase/waxing-gibbous.png";
import { useWeatherContext } from "../../context/WeatherContext";

export const Moonphase = () => {
  const { dailyWeather } = useWeatherContext();
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

  const moon = dailyWeather.moonPhase;

  const setMoon = () => {
    if (moon === 0) {
      return { phase: newMoon, label: "New Moon" };
    } else if (moon > 0 && moon < 0.25) {
      return { phase: waxingCrescent, label: "Waxing Crescent" };
    } else if (moon === 0.25) {
      return { phase: firstQuarter, label: "First Quarter" };
    } else if (moon > 0.25 && moon < 0.5) {
      return { phase: waxingGibbous, label: "Waxing Gibbous" };
    } else if (moon === 0.5) {
      return { phase: fullMoon, label: "Full Moon" };
    } else if (moon > 0.5 && moon < 0.75) {
      return { phase: wainingGibbous, label: "Waining Gibbous" };
    } else if (moon === 0.75) {
      return { phase: lastQuarter, label: "Last Quarter" };
    } else if (moon > 0.75 && moon <= 1) {
      return { phase: waningCrescent, label: "Waining Crescent" };
    }
  };

  return (
    <Box className="stormy" mt={lgDown ? 5 : 2} mb={lgDown ? 5 : 0}>
      {moon ? <img src={setMoon()?.phase} alt="moon" /> : <CircularProgress />}

      <Box ml={3}>
        <Typography fontSize="1.5rem">Moonphase</Typography>
        <Typography fontSize="1.3rem" fontWeight="300">
          {setMoon()?.label}
        </Typography>
      </Box>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Box>
  );
};
