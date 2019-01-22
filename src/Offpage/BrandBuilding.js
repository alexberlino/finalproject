import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BrandBuilding extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>- Brand Building - Offpage SEO Freelancer | SEO Berlino</title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/offpage/brandbuilding"}
          />{" "}
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <img
            src="/auditmainpic/brandbuilding.jpg"
            title="brandbuilding, a photo by Max Langelott"
            alt="backlinking"
            width="90%"
            height="400px"
            className="imageAudit"
          />
          <h1 className="h1services">Brand building</h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">{t("brandbuildingMP1")}</div>
          <h2 className="serviceTitle"> Plan to get links</h2>
          <div className="serviceText">{t("brandbuildingMP2")}</div>
          <h2 className="serviceTitle"> Influencers</h2>
          <div className="serviceText">{t("brandbuildingMP3")}</div>
          <h2 className="serviceTitle"> Content Creation, but not any</h2>
          <div className="serviceText">{t("brandbuildingMP4")}</div>
          <h2 className="serviceTitle"> more reading</h2>
          <div className="serviceText">
            <a
              onClick={() =>
                this.props.pageChange(
                  "/article/linkbuilding-getting-it-right-in-2018"
                )
              }
              href={
                "/" +
                this.props.lng +
                "/article/linkbuilding-getting-it-right-in-2018"
              }
            >
              blog
            </a>
          </div>{" "}
          <div className="sideLinks black slide-in-left">
            <a
              className="block"
              href={"/" + this.props.lng + "/offpage/backlinkanalysis"}
            >
              {t("offpageHP1")}, {t("offpageHP2")}
            </a>
            <span className="block bold">
              {t("offpageHP3")}, {t("offpageHP4")}
            </span>{" "}
            <a className="block" href={"/" + this.props.lng + "/offpage/toxic"}>
              {t("offpageHP5")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(BrandBuilding);
