export const getForecast = async (
  lat: number,
  long: number,
  units = "metric"
) => {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=${units}`
  ).then((res) => res.json());

  return response.daily
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
    weather: response['current'].weather[0].main,
    description: response['current'].weather[0].description,
    icon: response['current'].weather[0].icon,
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
