import React from "react";
import ReactDOM from "react";
import App from "./App";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>404 Not Found</title>
        </Helmet>

        <div className="box404">
          <p className="message404">404. not found</p>
        </div>
      </div>
    );
  }
}
