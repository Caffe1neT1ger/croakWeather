import { useSelector } from "react-redux";

import { rootState } from "../../store";

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
  const mainState = useSelector((state: rootState) => state.mainReducer);
  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";

  const saveLocationHanlder = () => {
    const savedLocationList: ILocation[] = JSON.parse(
      localStorage.getItem("locationList") || "[]"
    );
    if (!savedLocationList.find((item) => item.name === location.name)) {
      localStorage.setItem(
        "locationList",
        JSON.stringify([...savedLocationList, location])
      );
    }
  };

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
          {String(
            current[mainState.numberSystems.temp as keyof typeof current]
          )}
          {degreesSymbol}
        </div>
      </div>
      <div className={styles.saveBlock}>
        <button
          className={styles.saveBtn}
          onClick={() => saveLocationHanlder()}
        >
          Save
        </button>
      </div>
      <img
        className={styles.weatherIcon}
        src={current.condition?.icon}
        alt={current.condition?.text}
      ></img>
    </div>
  );
};
