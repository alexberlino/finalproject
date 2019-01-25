import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class LocalSEO extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Local SEO | SEO Berlino</title>
          <meta
            name="description"
            content="Local SEO : make sure that SEO is well optimized for your area"
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/research/localseo"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/local.jpg"
          title="local, a photo by Brandi Ibrao"
          alt="local SEO"
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
          <h1 className="h1services"> Local SEO</h1> <br />
          <h2>{t("localMPT1")}</h2>
          <div className="serviceText">{t("localMP1")}</div>
          <br />
          <img className="serviceImage" src="/mybusiness.jpg" />
          <h2>{t("localMPT2")}</h2>
          <div className="serviceText">{t("localMP2")}</div>
          <br />
          <h2>{t("localMPT3")}</h2>
          <div className="serviceText">{t("localMP3")}</div> <br />
          <h2>{t("localMPT4")}</h2>
          <div className="serviceText">{t("localMP4")}</div> <br />
          <h2> {t("relevanttools")} </h2>
          <div className="serviceText">
            <footer>
              <a href="https://www.google.com/business/" target="_blank">
                Google's MyBusiness
              </a>
            </footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a className="block bold">{t("analyticsHP1")}</a>
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
            <a className="block" href={"/" + this.props.lng + "/research/sea"}>
              {t("analyticsHP6")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(LocalSEO);
