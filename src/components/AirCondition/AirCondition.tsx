import { mainState } from "../../utils/consts";
import { IWeather } from "../../utils/interfaces/weatherInterfaces";
import temperatureIcon from "../../assets/icons/Temperature_light.svg";
import windIcon from "../../assets/icons/wind-icon.svg";
import sunIcon from "../../assets/icons/Sunlight_light.svg";
import rainDropIcon from "../../assets/icons/Water_light.svg";
import styles from "./AirCondition.module.scss";
import { AirConditionItem } from "../AirConditionItem/AirConditionItem";
interface IAirConditionProps {
  weather: IWeather;
}

export const AirCondition = ({ weather }: IAirConditionProps) => {
  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";
  const speedSymbol = mainState.lengthSystem == "decimal" ? " km/h" : " m/h";

  return (
    <div className={styles.AirCondition}>
      <div className={styles.title}>Air Condition</div>
      <div className={styles.infoBlock}>
        <AirConditionItem
          iconSrc={temperatureIcon}
          title="Real Feel"
          value={weather.feelslike_c + degreesSymbol}
        />
        <AirConditionItem
          iconSrc={windIcon}
          title="Wind"
          value={weather.feelslike_c + speedSymbol}
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
