import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
// import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
// import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider, FormattedMessage } from "react-intl";

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(reduxPromise))
// );

let elem = (
  // <Provider store={store}>
  // <IntlProvider>
  <App />
  // </IntlProvider> // </Provider>
);

ReactDOM.render(elem, document.querySelector("main"));
