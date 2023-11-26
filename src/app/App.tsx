import { Grommet, Sidebar, Nav, Button, Main, Clock } from "grommet";
import { useEffect, useState } from "react";
import style from "./styles/App.module.scss";

import { getLocation, getLocationList } from "../http/weatherApi";
import { AppDispatch, rootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {
  ILocation,
  setCurrentLocationAction,
  setCurrentWeatherAction,
} from "../store/currentWeatherReducer";
import { IForecastState } from "../store/forecastReducer";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const currentLocation = useSelector(
    (state: rootState) => state.currentWeather
  );
  useEffect(() => {
    const gismeteoToken: string = "token=56b30cb255.3443075";
    document.cookie = gismeteoToken;
  }, []);
  console.log(currentLocation);
  const searchHandler = () => {
    getLocationList(inputValue).then((data) => console.log(data));
  };
  const currentLocationHandler = () => {
    getLocation(inputValue).then((data: IForecastState) => {
      dispatch(setCurrentLocationAction(data.location));
      dispatch(setCurrentWeatherAction(data.current));
    });
  };

  return (
    <Grommet theme={theme} full={true} className={style.App}>
      <Sidebar background="brand" header={<Clock type="digital" />}>
        <Nav gap="small">
          <Button hoverIndicator value="click" />
          <Button hoverIndicator value="click" />
        </Nav>
      </Sidebar>
      <Main pad="large">
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={() => searchHandler()}>Get Location List</button>
        <button onClick={() => currentLocationHandler()}>Get Location</button>
      </Main>
    </Grommet>
  );
};
