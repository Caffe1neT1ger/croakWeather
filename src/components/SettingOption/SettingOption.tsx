import { useState, FC } from "react";

import { ISettingOption } from "../../interfaces/mainInterfaces";

import styles from "./SettingOption.module.scss";

interface ISettingOptionProps {
  title: string;
  options: ISettingOption[];
  defaultOption: string | number;
  switchOptionFunction(option: string | number): void;
}

export const SettingOption: FC<ISettingOptionProps> = ({
  title,
  options,
  defaultOption,
  switchOptionFunction,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number>(
    defaultOption
  );

  const switchOptionHanlder = (option: string | number) => {
    if (selectedOption !== option) {
      switchOptionFunction(option);
      setSelectedOption(option);
    }
  };

  return (
    <div className={styles.settingOption}>
      <div className={styles.title}>{title}</div>
      <div className={styles.options}>
        {options.map((item, index) => {
          const className: string =
            item.key === selectedOption ? styles.active : styles.optionItem;
          return (
            <div
              key={index}
              className={className}
              onClick={() => switchOptionHanlder(item.key)}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
