import { IWeather } from "../../utils/interfaces/weatherInterfaces";
import temperatureIcon from "../../assets/icons/Temperature_light.svg";
import windIcon from "../../assets/icons/wind-icon.svg";
import sunIcon from "../../assets/icons/Sunlight_light.svg";
import rainDropIcon from "../../assets/icons/Water_light.svg";
import styles from "./AirCondition.module.scss";
import { AirConditionItem } from "../AirConditionItem/AirConditionItem";
import { useSelector } from "react-redux";
import { rootState } from "../../store";
interface IAirConditionProps {
  weather: IWeather;
}

export const AirCondition = ({ weather }: IAirConditionProps) => {
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
