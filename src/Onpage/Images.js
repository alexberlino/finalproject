import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Images extends Component {
  render() {
    const { t, i18n } = this.props;

    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("onpageHP7")}| SEO Berlino</title>
          <meta
            name="description"
            content="Get your images indexed and ranked with efficient optimization,
            in particular alt attribute, title tag, image size and file name"
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/images"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/images.jpg"
          title="images, a photo by Soragrit Wongsa"
          alt="image optimization SEO"
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
          <h1 className="h1services">{t("onpageHP7")} </h1>
          <div className="serviceText">{t("imagesMP1")}</div>
          <img src="/picture.svg" height="200px" className="serviceImage" />
          <div className="serviceText">{t("imagesMP2")}</div>
          <h2> alt attribute</h2>
          <div className="serviceText">{t("imagesMP3")}</div>
          <h2> image title</h2>
          <div className="serviceText">{t("imagesMP4")}</div>
          <h2> {t("imagesMPT5")}</h2>
          <div className="serviceText">{t("imagesMP4")}</div>
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
            <span className="block bold">{t("onpageHP7")}</span>
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
export default translate("translations")(Images);
