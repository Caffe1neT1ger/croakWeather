import { ILocation } from "./currentWeatherReducer";
import { IForecastState } from "./forecastReducer";

export interface ILocationMini {
  id: number;
  name: string;
  region: string;
  country: string;
}
export interface IMainState {
  theme: "dark" | "light";
  temperature: "celsius" | "fahrenheit";
  lengthSystem: "decimal" | "imperial";
  savedLocationList: IForecastState[];
  forecastDayLimit: number;
}
export const mainState = {
  theme: "light",
  temperature: "celsius",
  lengthSystem: "decimal",
  savedLocationList: [],
  forecastDayLimit: 7,
} as IMainState;

const SET_THEME = "SET_THEME";
const SET_TEMPERATURE = "SET_TEMPERATURE";
const SET_LENGTH_SYSTEM = "SET_LENGTH_SYSTEM";
const LOAD_LOCATION_LIST = "LOAD_LOCATION_LIST";
const ADD_LOCATION = "ADD_LOCATION";
const REMOVE_LOCATION = "REMOVE_LOCATION";

export const mainReducer = (state: IMainState = mainState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_TEMPERATURE:
      return { ...state, temperature: action.payload };
    case SET_LENGTH_SYSTEM:
      return { ...state, lengthSystem: action.payload };
    case LOAD_LOCATION_LIST:
      return {
        ...state,
        savedLocationList: action.payload,
      };
    case ADD_LOCATION:
      localStorage.setItem(
        "locationList",
        JSON.stringify([...state.savedLocationList, action.payload])
      );
      return {
        ...state,
        savedLocationList: [...state.savedLocationList, action.payload],
      };
    case REMOVE_LOCATION:
      localStorage.setItem(
        "locationList",
        JSON.stringify(
          state.savedLocationList.filter(
            (location) => location.location.id !== action.payload
          )
        )
      );
      return {
        ...state,
        savedLocationList: state.savedLocationList.filter(
          (location) => location.location.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const setThemeAction = (payload: IMainState["theme"]) => ({
  type: SET_THEME,
  payload,
});
export const setTemperatureAction = (payload: IMainState["temperature"]) => ({
  type: SET_TEMPERATURE,
  payload,
});
export const setLengthSystemAction = (payload: IMainState["lengthSystem"]) => ({
  type: SET_LENGTH_SYSTEM,
  payload,
});
export const loadLocationListAction = (payload: IForecastState[]) => ({
  type: LOAD_LOCATION_LIST,
  payload,
});
export const addLocationAction = (payload: ILocationMini) => ({
  type: ADD_LOCATION,
  payload,
});
export const removeLocationAction = (payload: number) => ({
  type: REMOVE_LOCATION,
  payload,
});
