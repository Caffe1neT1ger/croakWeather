import { useNavigate, NavLink } from "react-router-dom";

import {
  AdjustmentsHorizontalIcon,
  CloudIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";

import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const navigate = useNavigate();

  const navigateHandler = (location: string) => {
    navigate(location);
  };

  return (
    <div className={styles.NavBar}>
      <div className={styles.logoSection}>
        <div className={styles.LogoIcon} onClick={() => navigateHandler("/")}>
          CW
        </div>
      </div>
      <nav className={styles.navigation}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          onClick={() => navigateHandler("/")}
          to="/"
        >
          <CloudIcon />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          onClick={() => navigateHandler("/list")}
          to="/list"
        >
          <ListBulletIcon />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          onClick={() => navigateHandler("/setting")}
          to="/setting"
        >
          <AdjustmentsHorizontalIcon />
        </NavLink>
      </nav>
    </div>
  );
};
