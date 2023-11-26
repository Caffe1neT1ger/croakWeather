import { Grommet, Sidebar, Nav, Button, Main, Clock } from "grommet";
import { useEffect, useState } from "react";
import style from "./App.module.scss";

import { getLocation, getLocationList } from "../http/weatherApi";
import { AppDispatch, rootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {
  ILocation,
  setCurrentLocationAction,
  setCurrentWeatherAction,
} from "../store/currentWeatherReducer";
import { IForecastState } from "../store/forecastReducer";
import { NavBar } from "../components/NavBar/NavBar";
import { AppRouter } from "../components/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ILocationMini, loadLocationListAction } from "../store/mainReducer";
import { Search } from "../components/Search/Search";
import { getLocationListFromLocalStorage } from "../asyncActions/asyncWeather";

const theme = {
  global: {
    font: {
      family: "Comfortaa",
      size: "18px",
      height: "20px",
      weight: "semi bold",
    },
  },
};

export const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // const gismeteoToken: string = "token=56b30cb255.3443075";
    // document.cookie = gismeteoToken;
    // const tmpList: ILocationMini[] = [
    //   {
    //     id: 1,
    //     name: "Taganrod",
    //     region: "Taganrod",
    //     country: "Taganrod",
    //   },
    //   {
    //     id: 2,
    //     name: "Moscow",
    //     region: "Moscow",
    //     country: "Moscow",
    //   },
    //   {
    //     id: 3,
    //     name: "Rostov",
    //     region: "Rostov",
    //     country: "Rostov",
    //   },
    // ];
    // localStorage.setItem("locationList", JSON.stringify(tmpList));
    dispatch(getLocationListFromLocalStorage());
  }, []);

  return (
    <BrowserRouter>
      <Grommet theme={theme} full={true} className={style.App}>
        <NavBar />
        <div className={style.MainSection}>
          <Search />
          <AppRouter />
        </div>
      </Grommet>
    </BrowserRouter>
  );
};
