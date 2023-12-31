import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "../../store";
import { mainStateActions } from "../../store/mainState";

import { getLocationList } from "../../http/weatherApi";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { ILocation } from "../../interfaces/weatherInterfaces";

import styles from "./Search.module.scss";
import { ChoiceList } from "../../ChoiceList/ChoiceList";

export const Search = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [choiceList, setChoiceList] = useState<ILocation[]>([]);

  const fetchLocations = () => {
    if (inputValue.length > 0) {
      getLocationList(inputValue).then((data) => setChoiceList(data));
    }
  };

  const clearBtnHandler = () => {
    setInputValue("");
    setChoiceList([]);
  };

  const redirectToLocation = (locationName: string) => {
    clearBtnHandler();
    dispatch(mainStateActions.mainStateSetCurrentLocation(locationName));
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
        <XMarkIcon className={styles.clearIcon} onClick={clearBtnHandler} />

        <MagnifyingGlassIcon
          className={styles.searchIcon}
          onClick={fetchLocations}
        />
      </div>
      <ChoiceList
        choiceList={choiceList}
        redirectFunction={redirectToLocation}
      />
    </div>
  );
};
