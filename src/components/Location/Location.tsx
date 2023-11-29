import { mainState } from "../../utils/consts";
import { ICondition } from "../../utils/interfaces/weatherInterfaces";
import styles from "./Location.module.scss";

interface ILocationProps {
  name: string;
  localtime: string;
  temperature: number;
  condition: ICondition;
}

export const Location = ({
  name,
  localtime,
  temperature,
  condition,
}: ILocationProps) => {
  const time = new Date(Date.parse(localtime)).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const degreesSymbol = mainState.temperature == "celsius" ? " °C" : " °F";

  return (
    <div className={styles.Location}>
      <div className={styles.mainSection}>
        <img
          className={styles.icon}
          src={condition.icon}
          alt={condition.text}
        />
        <div className={styles.title}>
          <span>{name}</span>
          <span className={styles.time}> {time}</span>
        </div>
      </div>
      <div className={styles.temperature}>
        {temperature}
        {degreesSymbol}
      </div>
    </div>
  );
};
