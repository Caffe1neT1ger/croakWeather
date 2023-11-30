import axios from "axios";

export const $host = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_PATH,
  headers: {
    key: import.meta.env.VITE_REACT_APP_API_TOKEN,
  },
});
