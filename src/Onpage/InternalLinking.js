import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class InternalLinking extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("onpageHP3")}| SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/internallinking"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/internal.jpg"
          title="arrow, a photo by Scott Rodgerson"
          alt="internal linking SEO"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>
          <h1 className="h1services">{t("onpageHP3")}</h1>
          <h2> {t("internalMPT1")}</h2>
          <div className="serviceText">{t("internalMP1")}</div>
          <h2> {t("internalMPT2")}</h2>
          <div className="serviceText">{t("internalMP2")}</div>
          <h2> {t("internalMPT4")}</h2>
          <div className="serviceText">{t("internalMP4")}</div>
          <h2> {t("internalMPT5")}</h2>
          <div className="serviceText">{t("internalMP5")}</div>{" "}
          <h2> {t("internalMPT3")}</h2>
          <div className="serviceText">{t("internalMP3")}</div>
          <h2> {t("relevanttools")}</h2>
          <div className="serviceText">Screaming Frog</div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/keywordresearch"}
            >
              {t("onpageHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/landingpages"}
            >
              {t("onpageHP2")}
            </a>
            <a className="block bold">
              {t("onpageHP3")} {t("onpageHP5")}
            </a>{" "}
            <a className="block" href={"/" + this.props.lng + "/onpage/metas"}>
              {t("onpageHP4")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/content"}
            >
              {t("onpageHP6")}
            </a>
            <a className="block" href={"/" + this.props.lng + "/onpage/images"}>
              {t("onpageHP7")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/structureddata"}
            >
              {t("onpageHP8")}
            </a>{" "}
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/duplicatecontent"}
            >
              {t("onpageHP9")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/voicesearch"}
            >
              {t("onpageHP10")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(InternalLinking);
