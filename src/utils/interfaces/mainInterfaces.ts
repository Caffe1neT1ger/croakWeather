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
