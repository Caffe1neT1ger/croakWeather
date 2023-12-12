import { $host } from ".";

export const getCurrentWeather = async (location: number | string) => {
  let query: string | number = location;
  if (typeof location === "number") {
    query = "id:" + location;
  }
  const { data } = await $host.get("/current.json", {
    params: {
      q: location,
      lang: "ru",
    },
  });
  return data;
};

export const getForecastWeather = async (
  location: number | string,
  days: number = 7
) => {
  let query: string | number = location;
  if (typeof location === "number") {
    query = "id:" + location;
  }
  const { data } = await $host.get("/forecast.json", {
    params: {
      q: location,
      days: days,
      lang: "ru",
    },
  });
  return data;
};

export const getLocationList = async (location: string) => {
  const { data } = await $host.get("/search.json", {
    params: {
      q: location,
      lang: "ru",
    },
  });
  return data;
};
