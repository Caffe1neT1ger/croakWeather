import { BasicLocationInfo } from "../../components/BasicLocationInfo/BasicLocationInfo";

import styles from "./Weather.module.scss";
import { DailyForecast } from "../../components/DailyForecast/DailyForecast";
import { AirCondition } from "../../components/AirCondition/AirCondition";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../../store";

import {
  currentWeatherAction,
  fetchCurrentWeather,
  getLocationIdFromLS,
} from "../../store/currentWeatherState";
import { WeeklyForecast } from "../../components/WeeklyForecast/WeeklyForecast";

export const Weather = () => {
  const forecastDayLimit = useSelector(
    (state: rootState) => state.mainReducer.forecastDayLimit
  );
  const currentWeather = useSelector(
    (state: rootState) => state.currentWeatherReducer
  );
  const currentLocation = useSelector(
    (state: rootState) => state.mainReducer.currentLocation
  );
  const [isLoading, setIsloading] = useState(true);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    async function fetchData(locationName: number | string) {
      const data = await dispatch(fetchCurrentWeather(locationName));
      dispatch(
        currentWeatherAction.currentWeatherSetCurrentWeather(data.payload)
      );
      setTimeout(() => {
        setIsloading(false);
      }, 500);
    }
    fetchData(currentLocation);
  }, [currentLocation]);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <div className={styles.customLoader}></div>
      </div>
    );
  }
  return (
    <div className={styles.Weather}>
      <div className={styles.mainSection}>
        <BasicLocationInfo
          location={currentWeather.location}
          current={currentWeather.current}
        />
        <DailyForecast
          todayForecast={
            currentWeather.forecast?.forecastday.slice(0, 2) || [{ hour: [] }]
          }
        />
        <AirCondition weather={currentWeather.current} />
      </div>
      <WeeklyForecast
        weekForecast={currentWeather.forecast?.forecastday || []}
      />
    </div>
  );
};
