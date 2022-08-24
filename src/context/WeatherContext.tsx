import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getCurrentWeather,
  getDailyWeather,
  getForecast,
} from "../services/weatherApi";
import { CurrentWeatherType, DailyWeatherType } from "../types/WeatherTypes";

interface IWeatherData {
  currentWeather: CurrentWeatherType;
  setCurrentWeather: (currentWeather: CurrentWeatherType) => void;
  dailyWeather: DailyWeatherType;
  setDailyWeather: (dailyWeather: DailyWeatherType) => void;
  forecastFormatted: DailyWeatherType[];
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

  const [dailyWeather, setDailyWeather] = useState({} as DailyWeatherType);
  const [forecast, setForecast] = useState([] as any);

  const forecastFormatted = [] as DailyWeatherType[];

  forecast.map((item: any) => {
    forecastFormatted.push({
      dt: item.dt,
      sunrise: item.sunrise,
      sunset: item.sunset,
      moonrise: item.moonrise,
      moonset: item.moonset,
      moonPhase: item.moon_phase,

      tempDay: item["temp"].day,
      tempMin: item["temp"].min,
      tempMax: item["temp"].max,
      tempNight: item["temp"].night,
      tempEve: item["temp"].eve,
      tempMorn: item["temp"].morn,

      feelsDay: item["feels_like"].day,
      feelsNight: item["feels_like"].night,
      feelsEve: item["feels_like"].eve,
      feelsMorn: item["feels_like"].morn,

      pressure: item.pressure,
      humidity: item.humidity,
      dewPoint: item.dew_point,
      windSpeed: item.wind_speed,
      windDeg: item.wind_deg,
      windGust: item.wind_gust,

      weatherMain: item.weather[0].main,
      weatherDescription: item.weather[0].description,
      weatherIcon: item.weather[0].icon,

      clouds: item.clouds,
      pop: item.pop,
      rain: item.rain,
      uvi: item.uvi,
    });
  });

  console.log(forecastFormatted);
  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        dailyWeather,
        setDailyWeather,
        forecastFormatted,
        setForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

// useEffect(() => {
//   const get = async () => {
//     setDailyWeather(await getForecast(-22.9068, -43.1729));
//   };

//   get();
// }, []);

// useEffect(() => {
//   const get = async () => {
//     setForecast(await getForecast(-22.9068, -43.1729));
//   };

//   // get();
// }, []);
