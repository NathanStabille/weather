export type CurrentWeatherType = {
  city?: string;
  weather: string;
  description: string;
  icon: string;
  temp: number;
  humidity: number;
  pressure: number;
  visibility: number;
  windSpeed: number;
  windDeg: number;
  clouds: number;
  sunset: number;
  sunrise: number;
  latitude: number;
  longitude: number;
  timezone: string;
  dateHour: number;
  uvi: number;
  feelsLike: number;
};

export type DailyWeatherType = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moonPhase: number;

  tempDay: number;
  tempMin: number;
  tempMax: number;
  tempNight: number;
  tempEve: number;
  tempMorn: number;

  feelsDay: number;
  feelsNight: number;
  feelsEve: number;
  feelsMorn: number;

  pressure: number;
  humidity: number;
  dewPoint: number;
  windSpeed: number;
  windDeg: number;
  windGust: number;

  weatherMain: string;
  weatherDescription: string;
  weatherIcon: string;

  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};
