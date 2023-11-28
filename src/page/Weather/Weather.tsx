import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../../store";
import { useEffect, useState } from "react";
import {
  fetchCurrentWeather,
  getLocationListFromLocalStorage,
} from "../../asyncActions/asyncWeather";
import { IForecastState } from "../../store/forecastReducer";
import {
  ILocation,
  IWeather,
  setCurrentWeatherAction,
} from "../../store/currentWeatherReducer";
import { fetchIcon } from "../../http/weatherApi";

export const Weather = () => {
  const mainState = useSelector((state: rootState) => state.main);
  const dispatch: AppDispatch = useDispatch();
  const currentLocation: ILocation = useSelector(
    (state: rootState) => state.currentWeather.location.location
  );
  const currentWeather: IWeather = useSelector(
    (state: rootState) => state.currentWeather.location.current
  );

  return (
    <div>
      {currentLocation && currentWeather ? (
        <div>
          <div>{currentLocation.name}</div>
          <div>{currentLocation.region}</div>
          <div>{currentLocation.country}</div>
          <img src={currentWeather.condition.icon} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
