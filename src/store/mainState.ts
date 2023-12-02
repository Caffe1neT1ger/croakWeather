import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainState } from "../utils/interfaces/mainInterfaces";
import { IForecast, ILocation } from "../utils/interfaces/weatherInterfaces";
import {
  avgtemp_c,
  avgtemp_f,
  feelslike_c,
  feelslike_f,
  maxtemp_c,
  maxtemp_f,
  maxwind_kph,
  maxwind_mph,
  mintemp_c,
  mintemp_f,
  temp_c,
  temp_f,
  wind_kph,
  wind_mph,
} from "../utils/consts";

export const numberSystems = {
  temp: temp_c,
  maxtemp: maxtemp_c,
  mintemp: mintemp_c,
  avgtemp: avgtemp_c,
  wind: wind_kph,
  feelslike: feelslike_c,
  maxwind: maxwind_kph,
};

const initialState: IMainState = {
  theme: "dark",
  temperature: "celsius",
  lengthSystem: "decimal",
  savedLocationList: [],
  forecastDayLimit: 7,
  numberSystems: numberSystems,
  currentLocation: "Nalchik",
};

export const updateMainState = () => {
  if (localStorage.getItem("main") !== null) {
    const newMain = JSON.parse(localStorage.getItem("main") || "{}");
    return {
      ...newMain,
      numberSystems: {
        temp: newMain.temperature === "celsius" ? temp_c : temp_f,
        maxtemp: newMain.temperature === "celsius" ? maxtemp_c : maxtemp_f,
        mintemp: newMain.temperature === "celsius" ? mintemp_c : mintemp_f,
        avgtemp: newMain.temperature === "celsius" ? avgtemp_c : avgtemp_f,
        wind: newMain.lengthSystem === "decimal" ? wind_kph : wind_mph,
        feelslike:
          newMain.temperature === "celsius" ? feelslike_c : feelslike_f,
        maxwind: newMain.lengthSystem === "decimal" ? maxwind_kph : maxwind_mph,
      },
    };
  }
};

const removeLocationFromLS = (name: string) => {
  // LOCATION_LIST
  const list: ILocation[] = JSON.parse(
    localStorage.getItem("locationList") || "[]"
  );
  const newList = list.filter((location) => location.name !== name);
  localStorage.setItem("locationList", JSON.stringify(newList));
};
const updateNumberSystem = (newState: IMainState) => {
  localStorage.setItem(
    "main",
    JSON.stringify({
      theme: newState.theme,
      temperature: newState.temperature,
      lengthSystem: newState.lengthSystem,
      forecastDayLimit: newState.forecastDayLimit,
      currentLocation: newState.currentLocation,
    })
  );
  return {
    temp: newState.temperature === "celsius" ? temp_c : temp_f,
    maxtemp: newState.temperature === "celsius" ? maxtemp_c : maxtemp_f,
    mintemp: newState.temperature === "celsius" ? mintemp_c : mintemp_f,
    avgtemp: newState.temperature === "celsius" ? avgtemp_c : avgtemp_f,
    wind: newState.lengthSystem === "decimal" ? wind_kph : wind_mph,
    feelslike: newState.temperature === "celsius" ? feelslike_c : feelslike_f,
    maxwind: newState.lengthSystem === "decimal" ? maxwind_kph : maxwind_mph,
  };
};

const mainStateSlice = createSlice({
  name: "mainState",
  initialState: {
    ...initialState,
    ...updateMainState(),
  } as IMainState,
  reducers: {
    mainStateLoadSetting: (state) => {
      state = { ...state, ...updateMainState() };
    },
    mainStateSetTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      state.numberSystems = { ...updateNumberSystem(state) };
    },
    mainStateSetTemperature: (state, action: PayloadAction<string>) => {
      state.temperature = action.payload;
      state.numberSystems = { ...updateNumberSystem(state) };
    },
    mainStateSetLengthSystem: (state, action: PayloadAction<string>) => {
      state.lengthSystem = action.payload;
      state.numberSystems = { ...updateNumberSystem(state) };
    },
    mainStateSetForecastDayLimit: (state, action: PayloadAction<number>) => {
      state.forecastDayLimit = action.payload;
      state.numberSystems = { ...updateNumberSystem(state) };
    },
    mainStateLocationListClear: (state) => {
      state.savedLocationList = [];
    },
    mainStateLocationListAdd: (state, action: PayloadAction<IForecast>) => {
      state.savedLocationList = [...state.savedLocationList, action.payload];
    },
    mainStateLocationListRemove: (state, action: PayloadAction<string>) => {
      removeLocationFromLS(action.payload);
      state.savedLocationList = [
        ...state.savedLocationList.filter(
          (location: { location: { name: string } }) =>
            location.location.name !== action.payload
        ),
      ];
    },
    mainStateSetCurrentLocation: (state, action: PayloadAction<string>) => {
      state.currentLocation = action.payload;
      state.numberSystems = { ...updateNumberSystem(state) };
    },
  },
});

export const { actions: mainStateActions } = mainStateSlice;
export const { reducer: mainStateReducer } = mainStateSlice;
