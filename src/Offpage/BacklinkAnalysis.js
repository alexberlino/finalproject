import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BacklinkAnalysis extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Backlink Audit | SEO Berlino</title>
          <meta
            type="description"
            content="Backlinks still play a huge part in SEO. Understanding your profile and setting goals for quality links is key to success."
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/offpage/backlinkanalysis"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/linkmain.jpg"
          title="Links, a photo by JJ Ying"
          alt="backlinking"
          className="imageAudit"
        />

        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />
            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> SEO </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services"> Backlink Audit</h1>
          </div>
          <div>
            <div className="serviceText">
              <p>
                {t("BLanalysis1")}
                <a href={"/" + this.props.lng + "/offpage/brandbuilding"}>
                  brand building
                </a>
              </p>
            </div>
            <img
              src="/offpage.svg"
              className="bigicon"
              heigth="200px"
              width="200px"
            />
            <h2>{t("BLanalysisT1")}</h2>
            <div className="serviceText">{t("BLanalysis2")}</div>
            <img
              src="/qualityoverquantity.jpeg"
              className="bigicon"
              heigth="200px"
              width="200px"
            />
            <h2>{t("BLanalysisT2")}</h2>

            <div className="serviceText">{t("BLanalysis3")}</div>
            <h2>{t("BLanalysisT3")}</h2>
            <div className="serviceText">{t("BLanalysis4")}</div>
            <h2>{t("BLanalysisT4")}</h2>
            <div className="serviceText">{t("BLanalysis5")}</div>
            <h2>{t("BLanalysisT5")}</h2>
            <div className="serviceText">{t("BLanalysis6")}</div>
            <h2>{t("BLanalysisT6")}</h2>
            <div className="serviceText">{t("BLanalysis7")}</div>
            <h2> {t("relevanttools")}</h2>
            <div className="serviceText">
              <a
                target="blank"
                className="block"
                href="https://moz.com/link-explorer"
              >
                Moz Link Explorer
              </a>{" "}
              <a
                target="blank"
                className="block"
                href="https://de.majestic.com/"
              >
                Majestic SEO
              </a>
              <a target="blank" className="block" href="https://ahrefs.com/de/">
                ahrefs
              </a>
            </div>
          </div>
          <div className="sideLinks black slide-in-left">
            <span className="block bold">
              {t("offpageHP1")}, {t("offpageHP2")}
            </span>
            <a
              className="block"
              href={"/" + this.props.lng + "/offpage/brandbuilding"}
            >
              {t("offpageHP3")}, {t("offpageHP4")}
            </a>{" "}
            <a className="block" href={"/" + this.props.lng + "/offpage/toxic"}>
              {t("offpageHP5")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(BacklinkAnalysis);
