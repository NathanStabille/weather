import {
  NightsStay,
  LightMode,
  Search as SearchIcon,
  ArrowDropDown,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  useTheme,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useAppThemeContext } from "../../context/ThemeContext";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import { getLocationBrowser, getWeather } from "../../api/weatherApi";
import { geoApiOptions, GEO_API_URL } from "../../api/geoCitiesApi";

interface IAutoCompleteData {
  label: string;
  value: number;
}

export const SearchCity = () => {
  const theme = useTheme();

  //contexts -----------------------------------------------------
  const { themeName, toggleTheme } = useAppThemeContext();
  const { weather, setWeather } = useWeatherContext();

  //autocomplete states -----------------------------------------------------
  const [autoCompleteData, setAutoCompleteData] = useState(
    [] as IAutoCompleteData[]
  );
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState<IAutoCompleteData | null>(null);

  // function location browser state -----------------------------------------------------
  const [locationBrowser, setLocationBrowser] = useState(false);

  // button states -----------------------------------------------------
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { units, setUnits } = useUnitsContext();
  const open = Boolean(anchorEl);

  // function get cities for autocomplete ----------------------
  const loadOptions = (inputValue: string) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        setAutoCompleteData(
          response.data.map((city: any) => {
            return {
              label: `${city.name}, ${city.region}, ${city.country}`,
              value: `${city.latitude} ${city.longitude}`,
            };
          })
        );
      })
      .catch((err) => console.error(err));
  };

  // get value from autocomplete -----------------------------------------------------
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    loadOptions(value);
    setInputText(value);
  };

  // identify units from value button -----------------------------------------------------
  const whichUnit = () => {
    if (units === "f") {
      return "imperial";
    }

    return "metric";
  };

  // function set state for button degrees ----------------------------------------------
  const selectUnits = (unit: "c" | "f") => {
    setUnits(unit);
    setAnchorEl(null);
  };

  // function menu open/close button degrees -----------------------------------------
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //function get data weather from api ------------------------------

  const getWeatherInput = async (city: string, unit: string) => {
    if (inputText !== "") {
      // setWeather(await getWeather(city, unit));
      setInputText("");
    }
  };

  // update units weather -----------------------------------------
  useEffect(() => {
    const updateUnit = async () => {
      inputText === "" &&
        setWeather(await getWeather(weather.city, whichUnit()));
    };

    updateUnit();
  }, [units]);

  // function for location of user
  // useEffect(() => {
  //   const weatherBrowserLocation = () => {
  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;

  //       setLocationBrowser(true);
  //       setWeather(await getLocationBrowser(latitude, longitude));
  //     });
  //   };

  //   weatherBrowserLocation();
  // }, []);

  console.log(inputText);
  console.log(value);

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
          bgcolor={theme.palette.primary.light}
          borderRadius={6}
          paddingX={2}
          display="flex"
          width="30vw"
        >
          <Autocomplete
            autoComplete
            disablePortal
            freeSolo
            fullWidth
            onChange={(event: any, newValue: any) => {
              setValue(newValue);
            }}
            disableClearable
            options={autoCompleteData}
            value={value as IAutoCompleteData}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search city..."
                onChange={handleChange}
                onKeyDown={(e) =>
                  e.key === "Enter" && getWeatherInput(inputText, whichUnit())
                }
                value={inputText}
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            )}
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
            ":hover": {
              backgroundColor: theme.palette.background.default,
            },
          }}
        >
          {`${units.toUpperCase()}°`}
          <ArrowDropDown />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={() => selectUnits("c")}>C°</MenuItem>
          <MenuItem onClick={() => selectUnits("f")}>F°</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
