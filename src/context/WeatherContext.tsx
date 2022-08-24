import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Type } from "typescript";
import { getCurrentWeather, getForecast } from "../services/weatherApi";
import { CurrentWeatherType, DailyWeatherType } from "../types/WeatherTypes";

interface IWeatherData {
  currentWeather: CurrentWeatherType;
  setCurrentWeather: (currentWeather: CurrentWeatherType) => void;
  dailyWeather: DailyWeatherType;
  setDailyWeather: (dailyWeather: DailyWeatherType) => void;
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

  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType>({
    clouds: 4,
    dewPoint: 14.01,
    dt: 1661263200,
    feelsDay: 22.08,
    feelsEve: 21.15,
    feelsMorn: 16.15,
    feelsNight: 20.2,
    humidity: 60,
    moonPhase: 0.88,
    moonrise: 1661236980,
    moonset: 1661275560,
    pop: 0.35,
    pressure: 1025,
    rain: 0.11,
    sunrise: 1661245886,
    sunset: 1661287179,
    tempDay: 22.23,
    tempEve: 21.01,
    tempMax: 22.79,
    tempMin: 16.23,
    tempMorn: 16.3,
    tempNight: 19.93,
    uvi: 8.83,
    weatherDescription: "light rain",
    weatherIcon: "10d",
    weatherMain: "Rain",
    windDeg: 117,
    windGust: 8.52,
    windSpeed: 5.13,
  });
  const [forecast, setForecast] = useState([]);

  // useEffect(() => {
  //   const get = async () => {
  //     setDailyWeather(await getForecast(-22.9068, -43.1729));
  //   };

  //   get();
  // }, []);

  console.log(dailyWeather);
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
