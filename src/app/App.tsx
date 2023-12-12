import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { NavBar } from "../components/NavBar/NavBar";
import { AppRouter } from "../components/AppRouter/AppRouter";

import { AppDispatch } from "../store";
import { mainStateActions } from "../store/mainState";

import style from "./App.module.scss";

export const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(mainStateActions.mainStateLoadSetting());
  });

  return (
    <div className={style.App}>
      <NavBar />
      <div className={style.MainSection}>
        <AppRouter />
      </div>
    </div>
  );
};
