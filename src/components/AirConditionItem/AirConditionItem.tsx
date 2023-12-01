import styles from "./AirConditionItem.module.scss";

interface IAirConditionItemProps {
  title: string;
  iconSrc: string;
  value: string;
}

export const AirConditionItem = ({
  title,
  iconSrc,
  value,
}: IAirConditionItemProps) => (
  <div className={styles.infoItem}>
    <img className={styles.icon} src={iconSrc} alt="" />
    <div className={styles.infoInner}>
      <div className={styles.infoItemTitle}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  </div>
);
