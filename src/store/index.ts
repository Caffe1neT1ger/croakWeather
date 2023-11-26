import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currentWeatherReducer } from "./currentWeatherReducer";
import { mainReducer } from "./mainReducer";
import { forecastReducer } from "./forecastReducer";

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
  main: mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
