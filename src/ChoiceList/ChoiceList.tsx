import { FC } from "react";
import { ILocation } from "../interfaces/weatherInterfaces";

import styles from "./ChoiceList.module.scss";

interface IChoiceListProps {
  choiceList: ILocation[];
  redirectFunction: (locationName: string) => void;
}

export const ChoiceList: FC<IChoiceListProps> = ({
  choiceList,
  redirectFunction,
}) => {
  const redirectHandler = (name: string) => {
    redirectFunction(name);
  };

  if (choiceList.length === 0) return;

  return (
    <div className={styles.choiceList}>
      {choiceList.map((item, index) => {
        return (
          <div
            className={styles.choiceItem}
            key={index}
            onClick={() => redirectHandler(item.name)}
          >
            {item.name}, {item.region}
          </div>
        );
      })}
    </div>
  );
};
