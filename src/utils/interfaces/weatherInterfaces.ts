export interface IForecast {
  location: ILocation;
  current: IWeather;
  forecast?: { forecastday: IForecastDay[] };
}

export interface ISearchLocation {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string | Date;
}

export interface IWeather {
  lastUpdate?: string | Date;

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

  humidity: number;
  uv: number;

  condition?: ICondition;
}

export interface ICondition {
  text: string;
  icon: string;
  code: number;
}

export interface IForecastDay {
  date: string | Date;
  day: IDayInfo[];
  astro: IAstro;
  hour: IForecastHour[];
}

export interface IDayInfo {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;

  condition: ICondition;
}

export interface IAstro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
}

export interface IForecastHour extends IWeather {
  time: string;
  time_epoch: number;
}
