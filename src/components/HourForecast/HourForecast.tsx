import { useSelector } from "react-redux";
import { IForecastHour } from "../../utils/interfaces/weatherInterfaces";
import styles from "./HourForecast.module.scss";
import { rootState } from "../../store";

interface IHourForecastProps {
  hour: IForecastHour;
}

export const HourForecast = ({ hour }: IHourForecastProps) => {
  const mainState = useSelector((state: rootState) => state.mainReducer);
  const time = new Date(Date.parse(hour.time)).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";

  return (
    <div className={styles.HourForecast}>
      <div className={styles.time}>{time}</div>
      <img className={styles.icon} src={hour.condition?.icon} />
      <div className={styles.degrees}>
        {String(hour[mainState.numberSystems.temp as keyof typeof hour])}
        {degreesSymbol}
      </div>
    </div>
  );
};
