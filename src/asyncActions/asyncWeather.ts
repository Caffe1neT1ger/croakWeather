import { getLocationById } from "../http/weatherApi";
import { AppDispatch } from "../store";
import { setCurrentLocationAction } from "../store/currentWeatherReducer";
import { ILocationMini, loadLocationListAction } from "../store/mainReducer";

export const fetchCurrentWeather = (locationId: number) => {
  return (dispatch: AppDispatch) => {
    getLocationById(locationId).then((data) =>
      dispatch(setCurrentLocationAction(data))
    );
  };
};
export const getLocationListFromLocalStorage = () => {
  const locationList: ILocationMini[] = JSON.parse(
    localStorage.getItem("locationList") || "[]"
  );
  return (dispatch: AppDispatch) => {
    return dispatch(loadLocationListAction(locationList));
  };
};
