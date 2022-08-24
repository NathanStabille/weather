export const getDailyWeather = async (
  lat: number,
  long: number,
  units = "metric"
) => {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=${units}`
  ).then((res) => res.json());

  const daily = response.daily[0];
  return {
    dt: daily.dt,
    sunrise: daily.sunrise,
    sunset: daily.sunset,
    moonrise: daily.moonrise,
    moonset: daily.moonset,
    moonPhase: daily.moon_phase,

    tempDay: daily["temp"].day,
    tempMin: daily["temp"].min,
    tempMax: daily["temp"].max,
    tempNight: daily["temp"].night,
    tempEve: daily["temp"].eve,
    tempMorn: daily["temp"].morn,

    feelsDay: daily["feels_like"].day,
    feelsNight: daily["feels_like"].night,
    feelsEve: daily["feels_like"].eve,
    feelsMorn: daily["feels_like"].morn,

    pressure: daily.pressure,
    humidity: daily.humidity,
    dewPoint: daily.dew_point,
    windSpeed: daily.wind_speed,
    windDeg: daily.wind_deg,
    windGust: daily.wind_gust,

    weatherMain: daily.weather[0].main,
    weatherDescription: daily.weather[0].description,
    weatherIcon: daily.weather[0].icon,

    clouds: daily.clouds,
    pop: daily.pop,
    rain: daily.rain,
    uvi: daily.uvi,
  };
};

export const getCurrentWeather = async (
  lat: number,
  long: number,
  units = "metric"
) => {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=${units}`
  ).then((res) => res.json());

  return {
    latitude: response.lat,
    longitude: response.lon,
    timezone: response.timezone,
    weather: response["current"].weather[0].main,
    description: response["current"].weather[0].description,
    icon: response["current"].weather[0].icon,
    dateHour: response["current"].dt,
    feelsLike: response["current"].feels_like,
    temp: response["current"].temp,
    humidity: response["current"].humidity,
    pressure: response["current"].pressure,
    visibility: response["current"].visibility,
    clouds: response["current"].clouds,
    uvi: response["current"].uvi,
    windSpeed: response["current"].wind_speed,
    windDeg: response["current"].wind_deg,
    sunset: response["current"].sunset,
    sunrise: response["current"].sunrise,
  };
};

export const getForecast = async (
  lat: number,
  long: number,
  units = "metric"
) => {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=${units}`
  ).then((res) => res.json());

  const daily = response.daily;
  return {
    dt: daily.dt,
    sunrise: daily.sunrise,
    sunset: daily.sunset,
    moonrise: daily.moonrise,
    moonset: daily.moonset,
    moonPhase: daily.moon_phase,

    tempDay: daily["temp"].day,
    tempMin: daily["temp"].min,
    tempMax: daily["temp"].max,
    tempNight: daily["temp"].night,
    tempEve: daily["temp"].eve,
    tempMorn: daily["temp"].morn,

    feelsDay: daily["feels_like"].day,
    feelsNight: daily["feels_like"].night,
    feelsEve: daily["feels_like"].eve,
    feelsMorn: daily["feels_like"].morn,

    pressure: daily.pressure,
    humidity: daily.humidity,
    dewPoint: daily.dew_point,
    windSpeed: daily.wind_speed,
    windDeg: daily.wind_deg,
    windGust: daily.wind_gust,

    weatherMain: daily.weather[0].main,
    weatherDescription: daily.weather[0].description,
    weatherIcon: daily.weather[0].icon,

    clouds: daily.clouds,
    pop: daily.pop,
    rain: daily.rain,
    uvi: daily.uvi,
  };
};