import { $host } from ".";

// search location param q min length=4 for normal work
// current  city
// forecast for days: q=location; days=1-14 days; dt=2010-01-01;
// forecast  for one day: q=location; hour=0-24; dt=2010-01-01;

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

export const getLocation = async (loaction: string) => {
  const { data } = await $host.get("/current.json", {
    params: {
      q: loaction,
    },
    headers: {
      key: import.meta.env.VITE_REACT_APP_API_TOKEN,
    },
  });
  return data;
};
