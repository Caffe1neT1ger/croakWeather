import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { getLocationList } from "../../http/weatherApi";
import styles from "./Search.module.scss";
import { ILocation } from "../../store/currentWeatherReducer";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { fetchCurrentWeather } from "../../asyncActions/asyncWeather";

export const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [choiceList, setChoiceList] = useState<ILocation[]>([]);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const fetchLocations = () => {
    if (inputValue.length > 0) {
      getLocationList(inputValue).then((data) => setChoiceList(data));
    }
  };

  const clearBtnHandler = () => {
    setInputValue("");
    setChoiceList([]);
  };
  const redirectToLocation = (locationId: number) => {
    clearBtnHandler();
    dispatch(fetchCurrentWeather(locationId));
    navigate("/");
  };

  return (
    <div className={styles.Search}>
      <div className={styles.searchInputBlock}>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className={styles.searchInput}
          type="text"
          placeholder="Search for cities"
        />
        <XMarkIcon
          className={styles.clearIcon}
          onClick={() => clearBtnHandler()}
        />

        <MagnifyingGlassIcon
          className={styles.searchIcon}
          onClick={() => fetchLocations()}
        />
      </div>
      {choiceList.length === 0 ? (
        ""
      ) : (
        <div className={styles.choiceList}>
          {choiceList.map((item) => {
            return (
              <div
                className={styles.choiceItem}
                key={item.id}
                onClick={() => redirectToLocation(item.id)}
              >
                {item.name}, {item.region}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
