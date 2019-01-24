import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BestPractices extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {t("")}
            {t("bestpractMPh1")} | SEO Berlino
          </title>
          <meta
            name="description"
            content="SEO Competitor Analysis to better understand where you stand. Backlink profile Analysis, Keyword targeting anaylsis, onpage, offpage. "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/research/bestpractices"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/competitor.jpg"
          title="analysis, a photo by Stephen Dawson"
          alt="competitor analysis SEO"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>
          <h1 className="h1services">{t("bestpractMPh1")} </h1>
          <h2> {t("bestpractMPT1")}</h2>
          <div className="serviceText">{t("bestpractMP1")}</div>
          <h2>{t("bestpractMPT2")}</h2>
          <div className="serviceText">{t("bestpractMP2")}</div>
          <h2>{t("bestpractMPT3")}</h2>
          <div className="serviceText">{t("bestpractMP3")}</div>
          <h2>{t("bestpractMPT4")}</h2>
          <div className="serviceText">{t("bestpractMP4")}</div>
          <h2>{t("bestpractMPT5")}</h2>
          <div className="serviceText">{t("bestpractMP5")}</div>
          <h2> {t("bestpractMPT6")}</h2>
          <div className="serviceText">{t("bestpractMP6")}</div>{" "}
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
            <a className="block bold">{t("analyticsHP3")}</a>
            <a className="block" href={"/" + this.props.lng + "/research/sea"}>
              {t("analyticsHP6")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(BestPractices);
