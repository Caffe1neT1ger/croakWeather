import { ILocation, IWeather, weatherState } from "./currentWeatherReducer";

export interface IForecastState {
  location: ILocation;
  current: IWeather;
  forecast?: IForecastDay[];
}

export interface IForecastDay {
  date: string | Date;
  hour: IForacastHour[];
}
export interface IForacastHour {
  time_epoche: number;
  time: string | Date;
  weather: IWeather;
}

const SET_FORECAST = "SET_FORECAST";

export const forecastReducer = (
  state: IForecastState = weatherState,
  action: any
) => {
  switch (action.type) {
    case SET_FORECAST:
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
};

export const setForecastAction = (payload: IForecastState["forecast"]) => ({
  type: SET_FORECAST,
  payload,
});
