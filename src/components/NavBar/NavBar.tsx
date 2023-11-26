import { Button, Nav, Sidebar } from "grommet";
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
    <Sidebar
      className={styles.NavBar}
      header={
        <div className={styles.LogoIcon} onClick={() => navigate("/")}>
          CW
        </div>
      }
    >
      <Nav gap="small">
        <Button
          icon={
            <CloudIcon
              className={isActive("/") ? styles.active : styles.default}
              onClick={() => navigate("/")}
            />
          }
        />
        <Button
          icon={
            <ListBulletIcon
              className={isActive("/list") ? styles.active : styles.default}
              onClick={() => navigate("/list")}
            />
          }
        />

        <Button
          icon={
            <AdjustmentsHorizontalIcon
              className={isActive("/setting") ? styles.active : styles.default}
              onClick={() => navigate("/setting")}
            />
          }
        />
      </Nav>
    </Sidebar>
  );
};
