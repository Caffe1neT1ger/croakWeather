import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../../store";
import {
  ICondition,
  ILocation,
} from "../../utils/interfaces/weatherInterfaces";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "./Location.module.scss";
import { mainStateActions } from "../../store/mainState";
import { useNavigate } from "react-router-dom";

interface ILocationProps {
  name: string;
  localtime: string;
  temperature: number;
  condition: ICondition;
}

export const Location = ({
  name,
  localtime,
  temperature,
  condition,
}: ILocationProps) => {
  const mainState = useSelector((state: rootState) => state.mainReducer);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const time = new Date(Date.parse(localtime)).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";
  const removeLocationFromList = () => {
    dispatch(mainStateActions.mainStateLocationListRemove(name));
  };
  const goToWeatherPage = () => {
    dispatch(mainStateActions.mainStateSetCurrentLocation(name));
    navigate("/");
  };
  return (
    <div className={styles.LocationSection}>
      <div className={styles.Location} onClick={() => goToWeatherPage()}>
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
          onClick={() => removeLocationFromList()}
        />
      </div>
    </div>
  );
};
