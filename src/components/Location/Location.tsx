import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, rootState } from "../../store";
import { mainStateActions } from "../../store/mainState";

import { XMarkIcon } from "@heroicons/react/24/solid";

import { ICondition } from "../../interfaces/weatherInterfaces";

import styles from "./Location.module.scss";

interface ILocationProps {
  name: string;
  localtime: string;
  temperature: number;
  condition: ICondition;
}

export const Location: FC<ILocationProps> = ({
  name,
  localtime,
  temperature,
  condition,
}) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const mainState = useSelector((state: rootState) => state.mainReducer);

  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";
  const time = new Date(Date.parse(localtime)).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const removeLocationFromList = () => {
    dispatch(mainStateActions.mainStateLocationListRemove(name));
  };

  const goToWeatherPage = () => {
    dispatch(mainStateActions.mainStateSetCurrentLocation(name));
    navigate("/");
  };

  return (
    <div className={styles.LocationSection}>
      <div className={styles.Location} onClick={goToWeatherPage}>
        <div className={styles.mainSection}>
          <img
            className={styles.icon}
            src={condition.icon}
            alt={condition.text}
          />
          <div className={styles.title}>
            <span>{name}</span>
            <span className={styles.time}> {time}</span>
          </div>
        </div>
        <div className={styles.temperature}>
          {temperature}
          {degreesSymbol}
        </div>
      </div>
      <div className={styles.functionalSection}>
        <XMarkIcon
          height="35px"
          color="#fc7762"
          cursor="pointer"
          onClick={removeLocationFromList}
        />
      </div>
    </div>
  );
};
