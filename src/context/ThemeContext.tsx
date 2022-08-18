import { PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useMemo, useState } from "react";
import { Dark, Light } from "../theme/Theme";

interface IThemeContextData {
  themeName: PaletteMode;
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<PaletteMode>("light");

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  const theme = useMemo(() => {
    if (themeName === "light") {
      return Light;
    }

    return Dark;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
