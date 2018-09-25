import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(reduxPromise))
// );

let elem = (
  // <Provider store={store}>
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

ReactDOM.render(elem, document.querySelector("main"));
