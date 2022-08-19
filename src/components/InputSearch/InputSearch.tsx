import { Search } from "@mui/icons-material";
import { Box, IconButton, Input, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { WeatherType } from "../../types/WeatherType";

type Props = {
  appWeather: WeatherType;
  setAppWeather: (appWeather: WeatherType) => void;
};

export const InputSearch = ({ appWeather, setAppWeather }: Props) => {
  const [inputText, setInputText] = useState("");

  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Typography marginRight="10%" fontSize="2.5rem">
        Hello
      </Typography>
      <Box
        bgcolor={theme.palette.background.default}
        borderRadius={6}
        paddingX={2}
      >
        <Input
          placeholder="Search Location..."
          disableUnderline={true}
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <IconButton sx={{ color: theme.palette.text.primary, marginLeft: 3 }}>
          <Search fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};
