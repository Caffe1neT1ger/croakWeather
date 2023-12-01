import { useEffect } from "react";
import { WeatherList } from "../../components/WeatherList/WeatherList";
import { AppDispatch, rootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { IForecast, ILocation } from "../../utils/interfaces/weatherInterfaces";
import { getCurrentWeather } from "../../http/weatherApi";
import { mainStateActions } from "../../store/mainState";
import { Search } from "../../components/Search/Search";
import styles from "./WeatherListPage.module.scss";
export const WeatherListPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const weatherList: IForecast[] = useSelector(
    (state: rootState) => state.mainReducer.savedLocationList
  );
  useEffect(() => {
    async function fetchDataAndPushToState() {
      dispatch(mainStateActions.mainStateLocationListClear());
      const locationList: ILocation[] = JSON.parse(
        localStorage.getItem("locationList") || "[]"
      );
      let locationWeatherList: IForecast[] = [];
      if (locationList.length !== 0) {
        locationList.map(async (location) => {
          getCurrentWeather(location.name).then((data) => {
            dispatch(mainStateActions.mainStateLocationListAdd(data));
          });
        });
      }
    }
    fetchDataAndPushToState();
  }, []);

  return (
    <div className={styles.WeatherList}>
      <Search />
      <WeatherList weatherList={weatherList} />
    </div>
  );
};
