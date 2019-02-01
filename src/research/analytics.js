import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Analytics extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title> SEO Analytics | SEO Berlino</title>
          <meta
            type="description"
            content="Analytics for SEO. Without Data, it is difficult
              to make the right decisions. Analytics, Search Console, SiteCatalyst."
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/research/analysics"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/analytics.jpg"
          title="analytics, a photo by Carlos Muza"
          alt="analytics SEO"
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

          <h1 className="h1services"> SEO Analytics</h1>
          <h2> {t("analyticsMPT1")} </h2>
          <div className="serviceText">{t("analyticsMP1")} </div>
          <h2> Google Analytics</h2>
          <div className="serviceText">{t("analyticsMP2")}</div>

          <h2>{t("analyticsMPT3")}</h2>
          <div className="serviceText">{t("analyticsMP3")}</div>

          <h2>{t("analyticsMPT4")}</h2>
          <div className="serviceText">{t("analyticsMP4")}</div>

          <h2> {t("relevanttools")}</h2>
          <div className="serviceText">
            <footer>Google Analytics </footer>
            <footer>Google Search Console</footer>

            <footer>Site Catalyst / Omniture</footer>
            <footer>GA Guide</footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/research/localseo"}
            >
              {t("analyticsHP1")}
            </a>
            <a className="block bold">{t("analyticsHP2")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/research/bestpractices"}
            >
              {t("analyticsHP3")}
            </a>
            <a className="block" href={"/" + this.props.lng + "/research/sea"}>
              {t("analyticsHP6")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Analytics);
