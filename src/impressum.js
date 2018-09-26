import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";

class Impressum extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title />
        </Helmet>
        <div className="container">
          <span>
            `John Smith Kiehlufer 11 12059 Berlin Steuernummer.: 16/229/03193
            Fon: +49 (0) 15787011932 E-Mail: john.smith@gmail.com Internet:
            https://www.seoberlino.com Inhaltlich Verantwortlicher nach § 10
            Absatz 3 Verantwortlich für den redaktionellen Bereich: John Smith`
          </span>
        </div>
      </div> //Main
    );
  }
}

export default translate("translations")(Impressum);
