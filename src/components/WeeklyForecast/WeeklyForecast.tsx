import { useSelector } from "react-redux";
import {
  IForecast,
  IForecastDay,
} from "../../utils/interfaces/weatherInterfaces";
import styles from "./WeeklyForecast.module.scss";
import { rootState } from "../../store";
interface IWeeklyForecastProps {
  weekForecast: IForecastDay[];
}

export const WeeklyForecast = ({ weekForecast }: IWeeklyForecastProps) => {
  const mainState = useSelector((state: rootState) => state.mainReducer);
  return (
    <div className={styles.weeklyForecast}>
      <div className={styles.title}>7-Day Forecast</div>
      <div className={styles.forecastList}>
        {weekForecast.map((dayForecast, index) => {
          const weekDay = new Date(
            Date.parse(dayForecast.date)
          ).toLocaleDateString("en-GB", {
            weekday: "short",
          });
          const date = new Date(
            Date.parse(dayForecast.date)
          ).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
          });

          return (
            <div key={index} className={styles.forecastItem}>
              <div className={styles.dateSection}>
                <span> {weekDay} </span>
                <span className={styles.secondary}> {date}</span>
              </div>
              <div className={styles.conditionSection}>
                <img src={dayForecast.day.condition.icon} />
                <div className={styles.conditionText}>
                  {dayForecast.day.condition.text}
                </div>
              </div>
              <div>
                {String(
                  dayForecast.day[
                    mainState.numberSystems
                      .maxtemp as keyof typeof dayForecast.day
                  ]
                )}
                <span className={styles.secondary}>
                  /
                  {String(
                    dayForecast.day[
                      mainState.numberSystems
                        .mintemp as keyof typeof dayForecast.day
                    ]
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
