import { InputSearch } from "./components/InputSearch/InputSearch";
import { useWeatherContext } from "./context/WeatherContext";
import { Layout } from "./layout/Layout";

export const App = () => {
  const { weather } = useWeatherContext();

  return (
    <Layout>
      <InputSearch />

      <h1> {weather.city} </h1>
      <h1>Temp {weather.temp} </h1>
    </Layout>
  );
};
