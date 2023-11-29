import { mainState, numberSystems } from "../../utils/consts";
import { ILocation, IWeather } from "../../utils/interfaces/weatherInterfaces";
import styles from "./BasicLocationInfo.module.scss";

interface IBasicLocationInfoProps {
  location: ILocation;
  current: IWeather;
}

export const BasicLocationInfo = ({
  location,
  current,
}: IBasicLocationInfoProps) => {
  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";

  return (
    <div className={styles.BasicLocationInfo}>
      <div className={styles.mainBlock}>
        <div className={styles.titleSection}>
          <div className={styles.title}> {location.name}</div>
          <div className={styles.subtitle}>
            <span>{location.region}</span>
            <span>{location.country}</span>
          </div>
        </div>
        <div className={styles.degrees}>
          {String(current[numberSystems.temp as keyof typeof current])}
          {degreesSymbol}
        </div>
      </div>
      <img
        className={styles.weatherIcon}
        src={current.condition?.icon}
        alt={current.condition?.text}
      ></img>
    </div>
  );
};
