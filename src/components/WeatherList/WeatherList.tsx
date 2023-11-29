import { numberSystems } from "../../utils/consts";
import { Location } from "../Location/Location";
import { IForecast } from "../../utils/interfaces/weatherInterfaces";
import styles from "./WeatherList.module.scss";
interface IWeatherListProps {
  weatherList: IForecast[];
}

export const WeatherList = ({ weatherList }: IWeatherListProps) => {
  return (
    <div className={styles.weatherList}>
      {weatherList.map((item) => (
        <Location
          name={item.location.name}
          condition={item.current.condition}
          temperature={Number(
            item.current[numberSystems.temp as keyof typeof item.current]
          )}
          localtime={item.location.localtime}
        />
      ))}
    </div>
  );
};
