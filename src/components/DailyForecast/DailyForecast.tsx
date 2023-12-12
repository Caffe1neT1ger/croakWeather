import { FC } from "react";

import { HourForecast } from "../HourForecast/HourForecast";

import { IForecastDay } from "../../interfaces/weatherInterfaces";

import styles from "./DailyForecast.module.scss";

interface IDailyForecastProps {
  todayForecast: IForecastDay[] | [{ hour: [] }];
}

export const DailyForecast: FC<IDailyForecastProps> = ({ todayForecast }) => {
  const now = Date.now();

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
