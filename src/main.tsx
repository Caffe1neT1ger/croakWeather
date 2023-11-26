import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
