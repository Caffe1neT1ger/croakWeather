import { IForecast } from "./weatherInterfaces";

export interface IMainState {
  theme: string;
  temperature: string;
  lengthSystem: string;
  savedLocationList: IForecast[];
  forecastDayLimit: number;
  numberSystems: any;
  currentLocation: string;
}

export interface ISettingOption {
  key: string | number;
  value: string;
}
