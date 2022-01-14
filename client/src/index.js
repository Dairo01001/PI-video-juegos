import { render } from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import store from "./redux/store";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
