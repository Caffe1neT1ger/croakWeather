import { $host } from ".";

// search location param q min length=4 for normal work
// current  city
// forecast for days: q=location; days=1-14 days; dt=2010-01-01;
// forecast  for one day: q=location; hour=0-24; dt=2010-01-01;

export const getLocationListById = async (location: number) => {
  const { data } = await $host.get("/search.json", {
    params: {
      q: "id:" + location,
      //   lang: "ru",
    },
    headers: {
      key: import.meta.env.VITE_REACT_APP_API_TOKEN,
    },
  });
  return data;
};
export const getLocationList = async (location: string) => {
  const { data } = await $host.get("/search.json", {
    params: {
      q: location,
      //   lang: "ru",
    },
    headers: {
      key: import.meta.env.VITE_REACT_APP_API_TOKEN,
    },
  });
  return data;
};
export const getLocationById = async (location: number) => {
  const { data } = await $host.get("/current.json", {
    params: {
      q: "id:" + location,
    },
    headers: {
      key: import.meta.env.VITE_REACT_APP_API_TOKEN,
    },
  });
  return data;
};
export const getLocation = async (location: string) => {
  const { data } = await $host.get("/current.json", {
    params: {
      q: location,
    },
    headers: {
      key: import.meta.env.VITE_REACT_APP_API_TOKEN,
    },
  });
  return data;
};

export const fetchIcon = async (path: string) => {
  const { data } = await $host.get(path);
  return data;
};
