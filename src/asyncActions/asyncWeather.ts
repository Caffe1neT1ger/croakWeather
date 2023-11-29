// import { useSelector } from "react-redux";
// import { getLocationById } from "../http/weatherApi";
// import { AppDispatch, rootState } from "../store";
// import { setCurrentLocationAction } from "../store/currentWeatherReducer";
// import {
//   ILocationMini,
//   IMainState,
//   loadLocationListAction,
// } from "../store/mainReducer";

// export const fetchCurrentWeather = (locationId: number) => {
//   return (dispatch: AppDispatch) => {
//     getLocationById(locationId).then((data) =>
//       dispatch(setCurrentLocationAction(data))
//     );
//   };
// };
// // export const getLocationListFromLocalStorage = () => {
// //   return async (dispatch: AppDispatch) => {
// //     const locationList: ILocationMini[] = JSON.parse(
// //       localStorage.getItem("locationList") || "[]"
// //     );
// //     getLocationById(locationList[0].id).then((data) =>
// //       dispatch(setCurrentLocationAction(data))
// //     );
// //     return dispatch(loadLocationListAction(locationList));
// //   };
// // };
