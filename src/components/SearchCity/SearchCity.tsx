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
import { getWeather } from "../../api/weatherApi";
import { geoApiOptions, GEO_API_URL } from "../../api/geoCitiesApi";

interface IAutoCompleteData {
  label: string;
  value: string;
  latitude: number;
  longitude: number;
}

export const SearchCity = () => {
  const theme = useTheme();

  //contexts -----------------------------------------------------
  const { themeName, toggleTheme } = useAppThemeContext();
  const { setWeather } = useWeatherContext();

  //autocomplete states -----------------------------------------------------
  const [autoCompleteData, setAutoCompleteData] = useState(
    [] as IAutoCompleteData[]
  );
  const [inputText, setInputText] = useState("");
  const [autoCompleteItems, setAutoCompleteItems] = useState<IAutoCompleteData>(
    {
      label: "",
      value: "",
      latitude: 0,
      longitude: 0,
    }
  );

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
              label: `${city.city}, ${city.country}`,
              value: `${city.city}, ${city.country}`,
              latitude: city.latitude,
              longitude: city.longitude,
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

  const getWeatherInput = async (lat: number, long: number, unit: string) => {
    if (autoCompleteItems.value !== "") {
      const weatherRes = await getWeather(lat, long, unit);
      setWeather({ city: autoCompleteItems.value, ...weatherRes });
      setInputText("");
      setAutoCompleteItems({
        label: "",
        value: autoCompleteItems.value,
        latitude: autoCompleteItems.latitude,
        longitude: autoCompleteItems.longitude,
      });
    }
  };

  // update units weather -----------------------------------------
  useEffect(() => {
    const updateUnit = async () => {
      const weatherRes = await getWeather(
        autoCompleteItems.latitude,
        autoCompleteItems.longitude,
        whichUnit()
      );
      setWeather({ city: autoCompleteItems.value, ...weatherRes });
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
              setAutoCompleteItems(newValue);
            }}
            disableClearable
            options={autoCompleteData}
            value={autoCompleteItems as IAutoCompleteData}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search city..."
                onChange={handleChange}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  getWeatherInput(
                    autoCompleteItems.latitude,
                    autoCompleteItems.longitude,
                    whichUnit()
                  )
                }
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
            onClick={() =>
              getWeatherInput(
                autoCompleteItems.latitude,
                autoCompleteItems.longitude,
                whichUnit()
              )
            }
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
