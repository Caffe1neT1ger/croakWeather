import { mainState, numberSystems } from "../../utils/consts";
import { IForecastHour } from "../../utils/interfaces/weatherInterfaces";
import styles from "./HourForecast.module.scss";

interface IHourForecastProps {
  hour: IForecastHour;
}

export const HourForecast = ({ hour }: IHourForecastProps) => {
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
        {" "}
        {String(hour[numberSystems.temp as keyof typeof hour])}
        {degreesSymbol}
      </div>
    </div>
  );
};
