import { IForecastState } from "./forecastReducer";

export interface ILocation {
  id: number;
  tz_id: string;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime?: string | Date;
}

export interface IWeather {
  lastUpdate: string | Date;
  temp_c: number;
  temp_f: number;
  is_day: boolean;
  wind_kph: number;
  wind_mph: number;
  wind_dir: string;
  wind_degree: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  uv: number;
}

export const weatherState = {
  location: {},
  current: {},
} as IForecastState;

const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION";
const SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER";
export const currentWeatherReducer = (
  state: IForecastState = weatherState,
  action: any
) => {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return { ...state, location: action.payload };
    case SET_CURRENT_WEATHER:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export const setCurrentLocationAction = (payload: ILocation) => ({
  type: SET_CURRENT_LOCATION,
  payload,
});
export const setCurrentWeatherAction = (payload: IWeather) => ({
  type: SET_CURRENT_WEATHER,
  payload,
});
