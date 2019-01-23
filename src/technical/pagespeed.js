import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class PageSpeed extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("technicalHP4")} | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: page speed and why its important in SEO "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/pagespeed"}
          />
        </Helmet>{" "}
        <img
          src="/auditmainpic/pagespeed.jpg"
          title="pagespeed, a photo by Twixes"
          alt={t("technicalHP4")}
          width="80%"
          height="450px"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>

            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h1 className="h1services"> {t("technicalHP4")} </h1>{" "}
          <h2>{t("speedMPT1")}</h2>
          <p className="serviceText">{t("speedMP1")}</p>
          <p className="serviceText">{t("speedMP2")}</p>
          <p className="serviceText">{t("speedMP3")}</p>
          <p className="serviceText">{t("speedMP4")}</p>
          <h2> {t("speedMPT5")} </h2>{" "}
          <div className="serviceText">{t("speedMP5")}</div>
          <h2> {t("relevanttools")}</h2>
          <div className="serviceText">
            <footer>
              <a href="https://developers.google.com/speed/pagespeed/insights/?hl=de">
                Google PageSpeed Insights
              </a>{" "}
              <div className="block"> Lighthouse</div>
              <p className="italic">{t("speedMP2")}</p>
            </footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/indexation"}
            >
              {t("technicalHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/crawlability"}
            >
              {t("technicalHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/internationalisation"}
            >
              {t("technicalHP3")}
            </a>{" "}
            <a className="block bold">{t("technicalHP4")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/mobilefriendly"}
            >
              {t("technicalHP5")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/dynamicrendering"}
            >
              {t("technicalHP6")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/security"}
            >
              {t("technicalHP7")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(PageSpeed);
