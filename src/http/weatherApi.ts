import { $host } from ".";

// search location param q min length=4 for normal work
// current  city
// forecast for days: q=location; days=1-14 days; dt=2010-01-01;
// forecast  for one day: q=location; hour=0-24; dt=2010-01-01;

export const getCurrentWeather = async (location: number | string) => {
  if (typeof location === "number") {
    const { data } = await $host.get("/current.json", {
      params: {
        q: "id:" + location,
        lang: "ru",
      },
    });
    return data;
  }
  if (typeof location === "string") {
    const { data } = await $host.get("/current.json", {
      params: {
        q: location,
        lang: "ru",
      },
    });
    return data;
  }
};
export const getForecastWeather = async (
  location: number | string,
  days: number = 7
) => {
  if (typeof location === "number") {
    const { data } = await $host.get("/forecast.json", {
      params: {
        q: "id:" + location,
        days: days,
        lang: "ru",
      },
    });
    return data;
  }
  if (typeof location === "string") {
    const { data } = await $host.get("/forecast.json", {
      params: {
        q: location,
        days: days,
        lang: "ru",
      },
    });
    return data;
  }
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
