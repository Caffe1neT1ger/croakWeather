import { Routes, Route, Navigate } from "react-router-dom";
import { Weather } from "../../page/Weather/Weather";
import { Setting } from "../../page/Setting/Setting";
import { WeatherList } from "../../page/WeatherList/WeatherList";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/list" element={<WeatherList />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<Navigate to={""} replace />} />
    </Routes>
  );
};
