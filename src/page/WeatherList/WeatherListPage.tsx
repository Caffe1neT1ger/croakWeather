import { WeatherList } from "../../components/WeatherList/WeatherList";
import { weatherList } from "../../utils/consts";
import { IForecast } from "../../utils/interfaces/weatherInterfaces";

export const WeatherListPage = () => {
  return <WeatherList weatherList={weatherList} />;
};
