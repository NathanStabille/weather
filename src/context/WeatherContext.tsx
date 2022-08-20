import { createContext, ReactNode, useContext, useState } from "react";
import { WeatherType } from "../types/WeatherType";

interface IWeatherData {
  weather: WeatherType;
  setWeather: (weather: WeatherType) => void;
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
  const [weather, setWeather] = useState<WeatherType>({
    city: "Rio de Janeiro",
    country: "BR",
    weather: "Clouds",
    climate: "overcast clouds",
    feelsLike: 16.76,
    icon: "04n",
    temp: 16.78,
    tempMax: 18.86,
    tempMin: 16,
    humidity: 86,
    pressure: 1028,
    visibility: 6000,
    windSpeed: 3.6,
    windDeg: 220,
    clouds: 100,
    sunset: 1660941504,
    sunrise: 1660900492,
  });

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
