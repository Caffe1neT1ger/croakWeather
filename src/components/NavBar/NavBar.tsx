import { useNavigate, useLocation } from "react-router-dom";

import {
  AdjustmentsHorizontalIcon,
  CloudIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return path === location.pathname;
  };

  return (
    <div className={styles.NavBar}>
      <div className={styles.logoSection}>
        <div className={styles.LogoIcon} onClick={() => navigate("/")}>
          CW
        </div>
      </div>
      <nav className={styles.navigation}>
        <CloudIcon
          className={isActive("/") ? styles.active : styles.default}
          onClick={() => navigate("/")}
        />

        <ListBulletIcon
          className={isActive("/list") ? styles.active : styles.default}
          onClick={() => navigate("/list")}
        />

        <AdjustmentsHorizontalIcon
          className={isActive("/setting") ? styles.active : styles.default}
          onClick={() => navigate("/setting")}
        />
      </nav>
    </div>
  );
};
