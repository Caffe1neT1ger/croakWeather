import { ILocation } from "./currentWeatherReducer";

export interface IMainState {
  theme: "dark" | "light";
  temperature: "celsius" | "fahrenheit";
  lengthSystem: "decimal" | "imperial";
  savedLocationList: ILocation[];
  forecastDayLimit: number;
}
const mainState = {
  theme: "light",
  temperature: "celsius",
  lengthSystem: "decimal",
  savedLocationList: [],
  forecastDayLimit: 7,
} as IMainState;

const SET_THEME = "SET_THEME";
const SET_TEMPERATURE = "SET_TEMPERATURE";
const SET_LENGTH_SYSTEM = "SET_LENGTH_SYSTEM";
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
    case ADD_LOCATION:
      return {
        ...state,
        savedLocationList: [...state.savedLocationList, action.payload],
      };
    case REMOVE_LOCATION:
      return {
        ...state,
        savedLocationList: state.savedLocationList.filter(
          (location) => location.tz_id !== action.payload
        ),
      };
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
export const addLocationAction = (payload: ILocation) => ({
  type: ADD_LOCATION,
  payload,
});
export const removeLocationAction = (payload: string) => ({
  type: REMOVE_LOCATION,
  payload,
});
