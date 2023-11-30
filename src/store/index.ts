import { configureStore } from "@reduxjs/toolkit";
import { mainStateReducer } from "./mainState";
import { currentWeatherReducer } from "./currentWeatherState";

export const store = configureStore({
  reducer: {
    mainReducer: mainStateReducer,
    currentWeatherReducer: currentWeatherReducer,
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
