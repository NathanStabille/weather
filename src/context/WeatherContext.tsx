import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Type } from "typescript";
import { getCurrentWeather, getForecast } from "../services/weatherApi";
import { CurrentWeatherType } from "../types/WeatherType";

interface IWeatherData {
  currentWeather: CurrentWeatherType;
  setCurrentWeather: (currentWeather: CurrentWeatherType) => void;
  dailyWeather: Type[];
  setDailyWeather: (dailyWeather: []) => void;
  forecast: Type[];
  setForecast: (forecast: []) => void;
}

interface IWeatherProviderProps {
  children: ReactNode;
}

const WeatherContext = createContext({} as IWeatherData);

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider: React.FC<IWeatherProviderProps> = ({
  children,
}) => {
  const [currentWeather, setCurrentWeather] = useState(
    {} as CurrentWeatherType
  );

  const [dailyWeather, setDailyWeather] = useState([]);
  const [forecast, setForecast] = useState([]);

  // useEffect(() => {
  //   const get = async () => {
  //     const daily = await getForecast(-22.9068, -43.1729)
  //     setDailyWeather(daily[0])
  //   };

  //   get();
  // }, []);

  // useEffect(() => {
  //   const get = async () => {
  //     const daily = await getForecast(-22.9068, -43.1729)
  //     setForecast(daily.slice(1))
  //   };

  //   get();
  // }, []);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        dailyWeather,
        setDailyWeather,
        forecast,
        setForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
