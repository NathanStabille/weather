export const getforecast = async (city: string, units: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${process.env.REACT_WEATHER_API_KEY}`
  ).then((res) => res.json());

  return {
    city: response["name"],
    country: response["sys"].country,
    weather: response["weather"][0].main,
    climate: response["weather"][0].description,
    feelsLike: response["main"].feels_like,
    icon: response["weather"][0].icon,
    temp: response["main"].temp,
    tempMax: response["main"].temp_max,
    tempMin: response["main"].temp_min,
    humidity: response["main"].humidity,
    pressure: response["main"].pressure,
    visibility: response["visibility"],
    windSpeed: response["wind"].speed,
    windDeg: response["wind"].deg,
    clouds: response["clouds"].all,
    sunset: response["sys"].sunset,
    sunrise: response["sys"].sunrise,
  };
};

export const getWeather = async (
  lat: number,
  long: number,
  units = "metric"
) => {
  const response = await fetch(
    ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=cfa0fa15edcac10632c970621876650c`
  ).then((res) => res.json());

  return {
   
    country: response["sys"].country,
    weather: response["weather"][0].main,
    climate: response["weather"][0].description,
    feelsLike: response["main"].feels_like,
    icon: response["weather"][0].icon,
    temp: response["main"].temp,
    tempMax: response["main"].temp_max,
    tempMin: response["main"].temp_min,
    humidity: response["main"].humidity,
    pressure: response["main"].pressure,
    visibility: response["visibility"],
    windSpeed: response["wind"].speed,
    windDeg: response["wind"].deg,
    clouds: response["clouds"].all,
    sunset: response["sys"].sunset,
    sunrise: response["sys"].sunrise,
  };
};
