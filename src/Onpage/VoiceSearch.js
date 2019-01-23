import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class VoiceSearch extends Component {
  render() {
    const { t, i18n } = this.props;

    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("onpageHP10")} | SEO Berlino</title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/voicesearch"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/voice.jpg"
          title="voice, a photo by Jason Rosewell"
          alt="voice search SEO"
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
          <h1 className="h1services">{t("onpageHP10")}</h1>
          <h2>{t("voiceMPT1")}</h2>
          <div className="serviceText">{t("voiceMP1")}</div>
          <h2> {t("voiceMPT2")}</h2>
          <div className="serviceText">{t("voiceMP2")}</div>
          <h2> {t("voiceMPT3")}</h2>
          <div className="serviceText">{t("voiceMP3")} </div>
          <h2> {t("voiceMPT4")}</h2>
          <div className="serviceText">{t("voiceMP4")}</div>
          <h2> Featured Snippets</h2>
          <div className="serviceText">{t("voiceMP5")}</div>{" "}
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
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/duplicatecontent"}
            >
              {t("onpageHP9")}
            </a>
            <a className="block bold">{t("onpageHP10")}</a>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default translate("translations")(VoiceSearch);
