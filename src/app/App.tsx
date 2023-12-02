import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { NavBar } from "../components/NavBar/NavBar";
import { AppRouter } from "../components/AppRouter/AppRouter";

import { AppDispatch } from "../store";
import { mainStateActions } from "../store/mainState";

import style from "./App.module.scss";

// LOCALSTORAGE KEY TO CONST
// ниже для других файлов написан совет
// export const App:FC<ISomeInterface> = ({..., ...})

export const App = () => {
  const dispatch: AppDispatch = useDispatch();

  // Почему useEffect без массива зависимостей
  useEffect(() => {
    dispatch(mainStateActions.mainStateLoadSetting());
  });

  return (
  // Browser router должен иметь под собой redux provider
  // И также должен быть вынесен в index.tsx 
  <BrowserRouter>
      <div className={style.App}>
        <NavBar />
        <div className={style.MainSection}>
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
};
