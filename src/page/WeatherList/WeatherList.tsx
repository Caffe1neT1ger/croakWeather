import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../../store";
import { ILocationMini } from "../../store/mainReducer";
import { fetchCurrentWeather } from "../../asyncActions/asyncWeather";
import { useNavigate } from "react-router-dom";

export const WeatherList = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const savedLocationList: ILocationMini[] = useSelector(
    (state: rootState) => state.main.savedLocationList
  );
  const redirectToWeatherPage = (locationId: number) => {
    dispatch(fetchCurrentWeather(locationId));
    navigate("/");
  };
  return (
    <div>
      {savedLocationList.map((location) => {
        return (
          <div
            key={location.id}
            onClick={() => redirectToWeatherPage(location.id)}
          >
            {location.name}
          </div>
        );
      })}
    </div>
  );
};
