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
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Backlink Profile Audit - | SEO Berlino</title>
          <meta
            type="description"
            content="Backlinks still play a huge part in SEO. Understanding your profile and setting goals for quality links is key to success."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/offpage/backlinkanalysis"
          />{" "}
        </Helmet>

        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <img
            src="/auditmainpic/linkmain.jpg"
            title="Links, a photo by JJ Ying"
            alt="backlinking"
            width="90%"
            height="440px"
            className="imageAudit"
          />

          <div className="infoTitle">
            <h1 className="h1services"> Backlink Profile Audit</h1>
          </div>
          <div>
            <div className="serviceText">
              <p>
                {t("BLanalysis1")}
                <a href="/en/offpage/brandbuilding">brand building</a>.
              </p>
            </div>
            <img
              src="/offpage.svg"
              className="bigicon"
              heigth="200px"
              width="200px"
            />
            <h2 className="serviceTitle">
              Fact: Backlinks are still very important in 2019
            </h2>
            <div className="serviceText">{t("BLanalysis2")}</div>
            <img
              src="/qualityoverquantity.jpeg"
              className="bigicon"
              heigth="200px"
              width="200px"
            />
            <h2 className="serviceTitle">Quality over quantity</h2>

            <div className="serviceText">{t("BLanalysis3")}</div>
            <h2 className="serviceTitle">
              Refering Domains: page authority over domain authority
            </h2>
            <div className="serviceText">{t("BLanalysis4")}</div>
            <h2 className="serviceTitle">Competitors</h2>
            <div className="serviceText">{t("BLanalysis5")}</div>
            <h2 className="serviceTitle">Anchor text, nofollow/follow links</h2>
            <div className="serviceText">{t("BLanalysis6")}</div>
            <h2 className="serviceTitle">gov & edu links</h2>
            <div className="serviceText">{t("BLanalysis7")}</div>
            <h2 className="serviceTitle"> Related Tools and Resources</h2>
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
            <a className="block" href="/en/offpage/backlinkanalysis">
              {t("offpageHP1")}, {t("offpageHP2")}
            </a>
            <a className="block" href="/en/offpage/brandbuilding">
              {t("offpageHP3")}, {t("offpageHP4")}
            </a>{" "}
            <a className="block" href="/en/offpage/toxic">
              {t("offpageHP5")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(BacklinkAnalysis);
