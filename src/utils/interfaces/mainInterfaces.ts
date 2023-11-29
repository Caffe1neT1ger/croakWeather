import { IForecast } from "./weatherInterfaces";

export interface IMainState {
  theme: "dark" | "light";
  temperature: "celsius" | "fahrenheit";
  lengthSystem: "decimal" | "imperial";
  savedLocationList?: IForecast[];
  forecastDayLimit: number;
}
