// weather
// pressure
// visibility
// humadity
//
// wind
// clouds
// sunset
// sunrise

//weatherTomorrow with name city
//city and state name coutry name
//weatherPrediciton => next 5 days

export const getWeatherAll = async (city: string, units: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=5ed414bf791291f37233f9f86499b348`
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
