import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Toxic extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Toxic Links - Offpage SEO Freelancer | SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/offpage/toxic"}
          />
        </Helmet>
        <img
          src="/auditmainpic/toxic.jpg"
          title="toxic, a photo by Scott Rodgerson"
          alt="backlinking"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>

          <h1 className="h1services">Toxic links & {t("linkstoavoidtitle")}</h1>
          <h2>{t("BLanalysisT2")}</h2>
          <div className="serviceText">{t("linkstoavoid1")}</div>
          <h2>{t("linkstoavoidT2")}</h2>
          <div className="serviceText">{t("linkstoavoid2")}</div>

          <h2>{t("structuredMPT3")}</h2>
          <div className="serviceText">{t("linkstoavoid3")}</div>

          <h2> Disavow Tool</h2>
          <div className="serviceText">{t("linkstoavoid4")}</div>
          <div className="sideLinks black slide-in-left">
            <a
              className="block"
              href={"/" + this.props.lng + "/offpage/backlinkanalysis"}
            >
              {t("offpageHP1")}, {t("offpageHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/offpage/brandbuilding"}
            >
              {t("offpageHP3")}, {t("offpageHP4")}
            </a>{" "}
            <span className="block bold">{t("offpageHP5")}</span>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Toxic);
