import { FC } from "react";
import { useSelector } from "react-redux";

import { AirConditionItem } from "../AirConditionItem/AirConditionItem";

import { rootState } from "../../store";

import temperatureIcon from "../../assets/icons/Temperature_light.svg";
import windIcon from "../../assets/icons/wind-icon.svg";
import sunIcon from "../../assets/icons/Sunlight_light.svg";
import rainDropIcon from "../../assets/icons/Water_light.svg";

import { IWeather } from "../../interfaces/weatherInterfaces";

import styles from "./AirCondition.module.scss";

interface IAirConditionProps {
  weather: IWeather;
}

export const AirCondition: FC<IAirConditionProps> = ({ weather }) => {
  const mainState = useSelector((state: rootState) => state.mainReducer);
  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";
  const speedSymbol = mainState.lengthSystem == "decimal" ? " km/h" : " m/h";

  return (
    <div className={styles.AirCondition}>
      <div className={styles.title}>Air Condition</div>
      <div className={styles.infoBlock}>
        <AirConditionItem
          iconSrc={temperatureIcon}
          title="Real Feel"
          value={
            String(
              weather[mainState.numberSystems.temp as keyof typeof weather]
            ) + degreesSymbol
          }
        />
        <AirConditionItem
          iconSrc={windIcon}
          title="Wind"
          value={
            String(
              weather[mainState.numberSystems.wind as keyof typeof weather]
            ) + speedSymbol
          }
        />
        <AirConditionItem
          iconSrc={rainDropIcon}
          title="Humidity"
          value={weather.humidity + "%"}
        />
        <AirConditionItem
          iconSrc={sunIcon}
          title="UV Index"
          value={String(weather.uv)}
        />
      </div>
    </div>
  );
};
