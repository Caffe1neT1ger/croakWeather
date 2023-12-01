import { useDispatch, useSelector } from "react-redux";

import { SettingOption } from "../../components/SettingOption/SettingOption";

import { AppDispatch, rootState } from "../../store";
import { mainStateActions } from "../../store/mainState";

import {
  forecastDayLimitList,
  lengthSystem,
  temperatureSystem,
} from "../../utils/consts";

import styles from "./Setting.module.scss";

export const Setting = () => {
  const dispatch: AppDispatch = useDispatch();
  const mainState = useSelector((state: rootState) => state.mainReducer);

  const switchTemperatureSystem = (option: string) => {
    dispatch(mainStateActions.mainStateSetTemperature(option));
  };

  const switchLengthSystem = (option: string) => {
    dispatch(mainStateActions.mainStateSetLengthSystem(option));
  };

  const switchForecastDayLimit = (option: number) => {
    dispatch(mainStateActions.mainStateSetForecastDayLimit(option));
  };

  return (
    <div>
      <div className={styles.title}>Settings</div>
      <div className={styles.settingBlock}>
        <SettingOption
          title="Temperature"
          options={temperatureSystem}
          defaultOption={mainState.temperature}
          switchOptionFunction={switchTemperatureSystem}
        />
        <SettingOption
          title="Wind Speed"
          options={lengthSystem}
          defaultOption={mainState.lengthSystem}
          switchOptionFunction={switchLengthSystem}
        />
        <SettingOption
          title="Forecast Days Limit"
          options={forecastDayLimitList}
          defaultOption={mainState.forecastDayLimit}
          switchOptionFunction={switchForecastDayLimit}
        />
      </div>
    </div>
  );
};
