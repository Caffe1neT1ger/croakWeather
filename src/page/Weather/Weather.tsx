import { weatherForecast } from "../../utils/consts";
import { BasicLocationInfo } from "../../components/BasicLocationInfo/BasicLocationInfo";

import styles from "./Weather.module.scss";
import { DailyForecast } from "../../components/DailyForecast/DailyForecast";
import { AirCondition } from "../../components/AirCondition/AirCondition";

export const Weather = () => {
  return (
    <div className={styles.Weather}>
      <div className={styles.mainSection}>
        <BasicLocationInfo
          location={weatherForecast.location}
          current={weatherForecast.current}
        />
        <DailyForecast
          todayForecast={
            weatherForecast.forecast?.forecastday.slice(0, 2) || [{ hour: [] }]
          }
        />
        <AirCondition weather={weatherForecast.current} />
      </div>

      <div className={styles.weeklyForecast}></div>
    </div>
  );
};
