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
          <title> {t("impressum_title")} </title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <div className="infoTitle">
          <h1>Impressum</h1>{" "}
        </div>

        <div className="container">
          <div className="infoMain2">E-Mail: alex.bieth@gmail.com</div>
          <div className="infoMain2">Internet: https://www.seoberlino.com</div>
          <div className="infoMain2">Kiehlufer, 12059 Berlin</div>
          <div className="infoMain2">
            Inhaltlich Verantwortlicher nach § 10 Absatz 3 Verantwortlich für
            den redaktionellen Bereich: Alex Bieth
          </div>
          `
        </div>
      </div> //Main
    );
  }
}

export default translate("translations")(Impressum);
