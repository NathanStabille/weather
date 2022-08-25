import { createContext, ReactNode, useContext, useState } from "react";
import {} from "../services/weatherApi";
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
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>({
    weather: "Clear",
    description: "clear sky",
    icon: "01d",
    temp: 32.44,
    humidity: 70,
    pressure: 1000,
    visibility: 10000,
    windSpeed: 2.06,
    windDeg: 20,
    clouds: 0,
    sunset: 0.35,
    sunrise: 1661392867,
    latitude: 24.4511,
    longitude: 54.3969,
    timezone: "Asia/Dubai",
    uvi: 0.35,
    feelsLike: 39.44,
    dt: 1661395009,
  });
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherType>({
    dt: 1661414400,
    sunrise: 1661392867,
    sunset: 1661438910,
    moonrise: 1661385600,
    moonset: 1661435640,
    moonPhase: 0.94,
    timezone: "Asia/Dubai",

    tempDay: 37.56,
    tempMin: 32.44,
    tempMax: 37.56,
    tempNight: 34.65,
    tempEve: 33.83,
    tempMorn: 32.5,

    feelsDay: 42.87,
    feelsNight: 34.8,
    feelsEve: 40.83,
    feelsMorn: 39.5,

    pressure: 1000,
    humidity: 41,
    dewPoint: 21.31,
    windSpeed: 7.66,
    windDeg: 351,
    windGust: 10.07,

    weatherMain: "Clear",
    weatherDescription: "clear sky",
    weatherIcon: "01d",

    clouds: 1,
    pop: 0,
    rain: 0,
    uvi: 10.62,
  });
  const [forecast, setForecast] = useState([
    {
      dt: 1661500800,
      sunrise: 1661479290,
      sunset: 1661525254,
      moonrise: 1661475360,
      moonset: 1661524320,
      moon_phase: 0.97,
      temp: {
        day: 37.19,
        min: 32.95,
        max: 37.64,
        night: 34.2,
        eve: 35.09,
        morn: 32.95,
      },
      feels_like: {
        day: 40.82,
        night: 34.56,
        eve: 42.09,
        morn: 32.91,
      },
      pressure: 1001,
      humidity: 38,
      dew_point: 20.13,
      wind_speed: 9.97,
      wind_deg: 49,
      wind_gust: 14.37,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: 15,
      pop: 0,
      uvi: 10.73,
    },
    {
      dt: 1661587200,
      sunrise: 1661565713,
      sunset: 1661611597,
      moonrise: 1661565060,
      moonset: 1661612820,
      moon_phase: 0,
      temp: {
        day: 35.99,
        min: 32.42,
        max: 36.45,
        night: 32.75,
        eve: 33.87,
        morn: 32.55,
      },
      feels_like: {
        day: 41.81,
        night: 39.75,
        eve: 39.86,
        morn: 35.94,
      },
      pressure: 1003,
      humidity: 47,
      dew_point: 22.22,
      wind_speed: 7.25,
      wind_deg: 18,
      wind_gust: 11.46,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 11.1,
    },
    {
      dt: 1661673600,
      sunrise: 1661652136,
      sunset: 1661697940,
      moonrise: 1661654700,
      moonset: 1661701200,
      moon_phase: 0.03,
      temp: {
        day: 34.9,
        min: 30.87,
        max: 34.9,
        night: 32.4,
        eve: 32.71,
        morn: 30.87,
      },
      feels_like: {
        day: 37.64,
        night: 38.69,
        eve: 39.71,
        morn: 32.6,
      },
      pressure: 1002,
      humidity: 42,
      dew_point: 19.47,
      wind_speed: 7.55,
      wind_deg: 357,
      wind_gust: 9.14,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 10.76,
    },
    {
      dt: 1661760000,
      sunrise: 1661738558,
      sunset: 1661784282,
      moonrise: 1661744340,
      moonset: 1661789460,
      moon_phase: 0.06,
      temp: {
        day: 36.19,
        min: 31.06,
        max: 36.19,
        night: 32.41,
        eve: 32.88,
        morn: 31.06,
      },
      feels_like: {
        day: 39.17,
        night: 39.06,
        eve: 39.57,
        morn: 32.72,
      },
      pressure: 1003,
      humidity: 39,
      dew_point: 19.21,
      wind_speed: 7.69,
      wind_deg: 345,
      wind_gust: 8.92,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 2,
      pop: 0,
      uvi: 10.89,
    },
    {
      dt: 1661846400,
      sunrise: 1661824980,
      sunset: 1661870624,
      moonrise: 1661833980,
      moonset: 1661877840,
      moon_phase: 0.1,
      temp: {
        day: 36.21,
        min: 31.27,
        max: 36.21,
        night: 33.06,
        eve: 33.55,
        morn: 31.27,
      },
      feels_like: {
        day: 40.69,
        night: 38.62,
        eve: 39.45,
        morn: 31.42,
      },
      pressure: 1005,
      humidity: 43,
      dew_point: 20.77,
      wind_speed: 6.59,
      wind_deg: 30,
      wind_gust: 8.33,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 98,
      pop: 0,
      uvi: 11,
    },
    {
      dt: 1661932800,
      sunrise: 1661911402,
      sunset: 1661956965,
      moonrise: 1661923740,
      moonset: 1661966280,
      moon_phase: 0.13,
      temp: {
        day: 34.82,
        min: 30.58,
        max: 35.01,
        night: 32.29,
        eve: 32.79,
        morn: 30.58,
      },
      feels_like: {
        day: 38.8,
        night: 39.29,
        eve: 39.79,
        morn: 31.94,
      },
      pressure: 1005,
      humidity: 46,
      dew_point: 21.13,
      wind_speed: 6.54,
      wind_deg: 146,
      wind_gust: 8.3,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 10,
      pop: 0,
      uvi: 11,
    },
    {
      dt: 1662019200,
      sunrise: 1661997824,
      sunset: 1662043306,
      moonrise: 1662013620,
      moonset: 1662054840,
      moon_phase: 0.17,
      temp: {
        day: 36.34,
        min: 31.37,
        max: 36.34,
        night: 32.43,
        eve: 32.72,
        morn: 31.37,
      },
      feels_like: {
        day: 42.22,
        night: 39.43,
        eve: 39.72,
        morn: 33.24,
      },
      pressure: 1003,
      humidity: 46,
      dew_point: 22.28,
      wind_speed: 6.99,
      wind_deg: 5,
      wind_gust: 8.6,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 4,
      pop: 0,
      uvi: 11,
    },
  ]);

  const forecastFormatted = [] as DailyWeatherType[];

  forecast.map((item: any) => {
    return forecastFormatted.push({
      dt: item.dt,
      sunrise: item.sunrise,
      sunset: item.sunset,
      moonrise: item.moonrise,
      moonset: item.moonset,
      moonPhase: item.moon_phase,
      timezone: item.timezone,

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
