import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { allReducers } from "./redux/reducers";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
const store = createStore(allReducers);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path={`/user/:userId`} element={<App />} />
        <Route path={`/`} element={<App />} />
      </Routes>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
