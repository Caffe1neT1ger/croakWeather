import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getForecastWeather } from "../http/weatherApi";
import { IForecast, IForecastDay } from "../utils/interfaces/weatherInterfaces";

export const getLocationIdFromLS = () => {
  const location = JSON.parse(localStorage.getItem("locationIdList") || "[]");
  if (location.length !== 0) {
    return location[0];
  } else {
    return 2145091;
  }
};

export const fetchCurrentWeather = createAsyncThunk(
  "currentWeather/fetchCurrentWeather",
  async function (location: number | string = 0) {
    if (location === 0) {
      return getForecastWeather(getLocationIdFromLS(), 7).then((data) => data);
    } else {
      return getForecastWeather(location, 7).then((data) => data);
    }
  }
);

const initialState: IForecast = {
  location: {
    name: "Taganrog",
    region: "Rostov",
    country: "Russia",
    lat: 47.22,
    lon: 38.91,
    tz_id: "Europe/Moscow",

    localtime: "2023-11-29 16:32",
  },
  current: {
    temp_c: 8.4,
    temp_f: 47.2,
    is_day: 1,
    condition: {
      text: "Light rain",
      icon: "//cdn.weatherapi.com/weather/64x64/day/296.png",
      code: 1183,
    },
    wind_mph: 25.3,
    wind_kph: 40.7,
    wind_degree: 177,
    wind_dir: "S",

    humidity: 91,
    cloud: 100,
    feelslike_c: 3.8,
    feelslike_f: 38.9,
    uv: 2.0,
  },
};

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    currentWeatherSetCurrentWeather: (
      state,
      action: PayloadAction<IForecast>
    ) => {
      state.location = action.payload.location;
      state.current = action.payload.current;
      state.forecast = action.payload.forecast;
    },
    currentWeatherSetDailyForecast: (
      state,
      action: PayloadAction<{ forecastday: IForecastDay[] }>
    ) => {
      state.forecast = action.payload;
    },
  },
});

export const { actions: currentWeatherAction } = currentWeatherSlice;
export const { reducer: currentWeatherReducer } = currentWeatherSlice;
