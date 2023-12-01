import { Routes, Route, Navigate } from "react-router-dom";

import { Weather } from "../../page/Weather/Weather";
import { Setting } from "../../page/Setting/Setting";
import { WeatherListPage } from "../../page/WeatherList/WeatherListPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/list" element={<WeatherListPage />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<Navigate to={""} replace />} />
    </Routes>
  );
};
