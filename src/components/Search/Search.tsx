import {
  NightsStay,
  LightMode,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Input,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useAppThemeContext } from "../../context/ThemeContext";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import { getLocationBrowser, getWeather } from "../../services/api/weatherApi";

export const Search = () => {
  const theme = useTheme();
  const { themeName, toggleTheme } = useAppThemeContext();
  const { weather, setWeather } = useWeatherContext();
  const [locationBrowser, setLocationBrowser] = useState(false);
  const [inputText, setInputText] = useState("");

  // button states
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { units, setUnits } = useUnitsContext();
  const open = Boolean(anchorEl);

  const whichUnit = () => {
    if (units === "f") {
      return "imperial";
    }

    return "metric";
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const selectUnits = (unit: "c" | "f") => {
    setUnits(unit);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getWeatherInput = async (city: string, unit: string) => {
    if (inputText !== "") {
      setWeather(await getWeather(city, unit));
      setInputText("");
    }
  };

  // function for location of user
  useEffect(() => {
    const weatherBrowserLocation = () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocationBrowser(true);
        // setWeather(await getLocationBrowser(latitude, longitude));
      });
    };

    weatherBrowserLocation();
  }, []);

  // update units weather
  useEffect(() => {
    const updateUnit = async () => {
      inputText === "" &&
        setWeather(await getWeather(weather.city, whichUnit()));
    };

    updateUnit();
  }, [units]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Box display="flex" justifySelf="flex-start">
        <IconButton
          onClick={toggleTheme}
          sx={{ color: theme.palette.text.primary }}
        >
          {themeName === "light" ? (
            <NightsStay fontSize="large" />
          ) : (
            <LightMode fontSize="large" />
          )}
        </IconButton>
      </Box>

      {/* input */}
      <Box display="flex">
        <Box
          bgcolor={theme.palette.background.default}
          borderRadius={6}
          paddingX={2}
          display="flex"
        >
          <Input
            placeholder="Search Location..."
            disableUnderline={true}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && getWeatherInput(inputText, whichUnit())
            }
            value={inputText}
            sx={{
              fontSize: "1.3rem",
            }}
          />
          <IconButton
            sx={{ color: theme.palette.text.primary }}
            onClick={() => getWeatherInput(inputText, whichUnit())}
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* unit button */}
        <Button
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: theme.palette.text.primary,
            fontSize: "1.5rem",
            marginLeft: 2,
          }}
        >
          {`${units.toUpperCase()}°`}
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={() => selectUnits("c")}>C°</MenuItem>
          <MenuItem onClick={() => selectUnits("f")}>F°</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
