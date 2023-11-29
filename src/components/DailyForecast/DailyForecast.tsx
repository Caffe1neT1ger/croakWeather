import {
  IDayInfo,
  IForecastDay,
} from "../../utils/interfaces/weatherInterfaces";
import { HourForecast } from "../HourForecast/HourForecast";
import styles from "./DailyForecast.module.scss";

interface IDailyForecastProps {
  todayForecast: IForecastDay[] | [{ hour: [] }];
}

export const DailyForecast = ({ todayForecast }: IDailyForecastProps) => {
  const now = Date.now();

  console.log(todayForecast.length);
  return (
    <div className={styles.DailyForecast}>
      <div className={styles.title}>Today's Forecast</div>
      <div className={styles.forecastList}>
        {todayForecast.map((item) =>
          item.hour.map((item, index) => {
            if (now < Date.parse(item.time))
              return <HourForecast key={index} hour={item} />;
          })
        )}
      </div>
    </div>
  );
};
