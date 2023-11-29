import { Grommet } from "grommet";
import style from "./App.module.scss";
import { NavBar } from "../components/NavBar/NavBar";
import { AppRouter } from "../components/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Search } from "../components/Search/Search";

const theme = {
  global: {
    font: {
      family: "Comfortaa",
      size: "18px",
      height: "20px",
      weight: "semi bold",
    },
  },
};

export const App = () => {
  return (
    <BrowserRouter>
      <Grommet theme={theme} full={true} className={style.App}>
        <NavBar />
        <div className={style.MainSection}>
          <Search />
          <AppRouter />
        </div>
      </Grommet>
    </BrowserRouter>
  );
};
