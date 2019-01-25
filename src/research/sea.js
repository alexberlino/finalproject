import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class SEA extends Component {
  render() {
    const { t, i18n } = this.props;

    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEA, Search Engine Advertising | SEO Berlino</title>
          <meta
            name="description"
            content="Paid Search Services - Synchronize your SEA activities with your SEO Strategy. SEO Berlino."
          />
          <link rel="canonical" href={"/" + this.props.lng + "/research/sea"} />{" "}
        </Helmet>
        <img
          src="/auditmainpic/advertising.jpg"
          title="advertising, a photo by Denys Nevozhai"
          alt="SEA"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> SEO </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>
          <h1 className="h1services"> SEA, Search Engine Advertising</h1>
          <h2> {t("seaMPT1")} </h2>
          <div className="serviceText">{t("seaMP1")}</div>
          <h2> {t("seaMPT2")}</h2>
          <div className="serviceText">{t("seaMP2")}</div>
          <h2> {t("seaMPT3")}</h2>
          <div className="serviceText">{t("seaMP3")}</div>
          <h2> {t("seaMPT4")}</h2>
          <div className="serviceText">{t("seaMP4")}</div>
          <h2> {t("seaMPT5")}</h2>
          <div className="serviceText">{t("seaMP5")}</div>
          <h2> {t("relevanttools")}</h2>
          <div className="serviceText">
            <a href="https://ads.google.com/home/" target="_blank">
              Google Ads
            </a>
          </div>{" "}
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/research/localseo"}
            >
              {t("analyticsHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/research/analytics"}
            >
              {t("analyticsHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/research/bestpractices"}
            >
              {t("analyticsHP3")}
            </a>
            <a className="block bold">{t("analyticsHP6")}</a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(SEA);
