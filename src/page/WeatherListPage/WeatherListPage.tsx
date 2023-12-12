import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Search } from "../../components/Search/Search";
import { WeatherList } from "../../components/WeatherList/WeatherList";

import { AppDispatch, rootState } from "../../store";
import { mainStateActions } from "../../store/mainState";

import { getCurrentWeather } from "../../http/weatherApi";

import { IForecast, ILocation } from "../../interfaces/weatherInterfaces";

import styles from "./WeatherListPage.module.scss";
import { LOCATION_LIST } from "../../consts/consts";

export const WeatherListPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const weatherList: IForecast[] = useSelector(
    (state: rootState) => state.mainReducer.savedLocationList
  );
  const fetchDataAndPushToState = async () => {
    dispatch(mainStateActions.mainStateLocationListClear());
    const locationList: ILocation[] = JSON.parse(
      localStorage.getItem(LOCATION_LIST) || "[]"
    );

    if (locationList.length !== 0) {
      locationList.map(async (location) => {
        getCurrentWeather(location.name).then((data) => {
          dispatch(mainStateActions.mainStateLocationListAdd(data));
        });
      });
    }
  };
  useEffect(() => {
    fetchDataAndPushToState();
  }, []);

  return (
    <div className={styles.WeatherList}>
      <Search />
      <WeatherList weatherList={weatherList} />
    </div>
  );
};
