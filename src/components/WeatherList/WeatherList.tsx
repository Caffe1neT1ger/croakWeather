import { FC } from "react";
import { useSelector } from "react-redux";

import { Location } from "../Location/Location";

import { rootState } from "../../store";

import { IForecast } from "../../interfaces/weatherInterfaces";

import styles from "./WeatherList.module.scss";

interface IWeatherListProps {
  weatherList: IForecast[];
}

export const WeatherList: FC<IWeatherListProps> = ({ weatherList }) => {
  const numberSystems = useSelector(
    (state: rootState) => state.mainReducer.numberSystems
  );

  if (weatherList.length === 0) {
    return <div className={styles.empty}>List empy</div>;
  }
  return (
    <div className={styles.weatherList}>
      {weatherList.map((location, index) => (
        <Location
          key={index}
          name={location.location.name}
          condition={location.current.condition}
          temperature={Number(
            location.current[
              numberSystems.temp as keyof typeof location.current
            ]
          )}
          localtime={location.location.localtime}
        />
      ))}
    </div>
  );
};
