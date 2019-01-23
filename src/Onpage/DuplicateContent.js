import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class DuplicateContent extends Component {
  render() {
    const { t, i18n } = this.props;

    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>| SEO Berlino</title>
          <meta
            name="description"
            content="Duplicate Content and Semantics for SEO."
          />{" "}
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/duplicatecontent"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/duplicate.jpg"
          title="duplication, a photo by rawpixel"
          alt="duplicate content SEO"
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

          <h1 className="h1services"> {t("onpageHP9")} </h1>
          <h2>{t("duplicateMPT1")}</h2>
          <div className="serviceText">{t("duplicateMP1")}</div>

          <h2> {t("duplicateMPT2")}</h2>
          <div className="serviceText">{t("duplicateMP2")}</div>
          <div className="serviceText">{t("duplicateMP3")}</div>
          <h2> {t("duplicateMPT4")}</h2>
          <div className="serviceText">{t("duplicateMP4")}</div>

          <h2> {t("duplicateMPT5")}</h2>
          <div className="serviceText">{t("duplicateMP5")}</div>
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
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/internallinking"}
            >
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
            <span className="block bold">{t("onpageHP9")}</span>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/voicesearch"}
            >
              {t("onpageHP10")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(DuplicateContent);
