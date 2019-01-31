import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import Helmet from "react-helmet";
import ContactMain from "./ContactMain";

class Freeaudit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("preaudit")} | SEO Berlino</title>
          <meta
            name="description"
            content="SEO Services Audit Ad-hoc - SEO Consultant in Berlin"
          />
          <link rel="canonical" href={"/" + this.props.lang + "/services"} />
        </Helmet>
        <div className="services2">
          <div className="infoTitle">
            <br />
            <br />
            <br />
            <br />
            <h1 className="h1services2">{t("preaudit")}</h1>
          </div>
          <br />
          <br />
          <div className="intro20">
            <div className="introQuarter">
              <div className="transparent"> </div>
              <br />
              <br />

              <p className="serviceText big">{t("freeauditMP")}</p>
            </div>
          </div>
          <br /> <br /> <br />
        </div>{" "}
        <ContactMain />
      </div>
    );
  }
}

export default translate("translations")(Freeaudit);
