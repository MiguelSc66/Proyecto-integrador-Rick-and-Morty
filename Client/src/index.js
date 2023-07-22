import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./components/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  //encierro mi app en breowser Router para que funcione la config. de las Routes en App.js
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
