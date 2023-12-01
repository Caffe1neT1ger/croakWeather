import { useState } from "react";

import styles from "./SettingOption.module.scss";

interface ISettingOptionProps {
  title: string;
  options: { key: string; value: string }[] | { key: number; value: number }[];
  defaultOption: string | number;
  switchOptionFunction(option: string | number): void;
}

export const SettingOption = ({
  title,
  options,
  defaultOption,
  switchOptionFunction,
}: ISettingOptionProps) => {
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
