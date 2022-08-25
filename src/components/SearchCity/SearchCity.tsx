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
  TextField,
  useTheme,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppThemeContext } from "../../context/ThemeContext";
import { useUnitsContext } from "../../context/UnitsContext";
import { useWeatherContext } from "../../context/WeatherContext";
import {
  getCurrentWeather,
  getDailyWeather,
  getForecastWeather,
} from "../../services/weatherApi";
import { geoApiOptions, GEO_API_URL } from "../../services/geoCitiesApi";
import { TimeAndLocation } from "../TimeAndLocation/TimeAndLocation";

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
  const { currentWeather, setCurrentWeather, setDailyWeather, setForecast } =
    useWeatherContext();

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

  // button c|f  state -----------------------------------------------------
  const { units, setUnits } = useUnitsContext();

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

  const toggleUnit = () => {
    units === "metric" ? setUnits("imperial") : setUnits("metric");
  };

  //function get data weather from api ------------------------------

  const getWeatherInput = async (lat: number, long: number, unit: string) => {
    if (autoCompleteItems.value !== "") {
      const weatherRes = await getCurrentWeather(lat, long, unit);
      setCurrentWeather({ city: autoCompleteItems.value, ...weatherRes });
      setInputText("");
      setAutoCompleteItems({
        label: "",
        value: autoCompleteItems.value,
        latitude: autoCompleteItems.latitude,
        longitude: autoCompleteItems.longitude,
      });
    }
  };

  console.log(currentWeather.latitude, currentWeather.longitude)
  // update units weather -----------------------------------------
  // useEffect(() => {
  //   const updateUnit = async () => {
  //     const weatherRes = await getCurrentWeather(
  //       autoCompleteItems.latitude,
  //       autoCompleteItems.longitude,
  //       units
  //     );
  //     setCurrentWeather({ city: autoCompleteItems.value, ...weatherRes });
  //   };

  //   updateUnit();
  // }, [units]);

  // useEffect(() => {
  //   const update = async () => {
  //     setDailyWeather(
  //       await getDailyWeather(
  //         currentWeather.latitude,
  //         currentWeather.longitude,
  //         units
  //       )
  //     );

  //     setForecast(
  //       await getForecastWeather(
  //         currentWeather.latitude,
  //         currentWeather.longitude,
  //         units === "metric" ? "metric" : "imperial"
  //       )
  //     );
  //   };

  //   update();
  // }, [currentWeather]);

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

      <TimeAndLocation />
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
                    units
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
                units
              )
            }
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* unit button */}

        <Button onClick={toggleUnit} sx={{ fontSize: "1.5rem", marginX: 1 }}>
          {units === "metric" ? "C°" : "F°"}
        </Button>
      </Box>
    </Box>
  );
};
