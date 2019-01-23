import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class MobileFriendly extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mobile First - Mobile friendly | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: mobile friendly and why its important in SEO "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/mobilefriendly"}
          />
        </Helmet>{" "}
        <img
          src="/auditmainpic/mobilefriendly.jpg"
          title="mobile phone, a photo by Rodion Kutsaev"
          alt="mobile friendly"
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
          <h1 className="h1services">{t("mobileMPh1")}</h1>{" "}
          <div className="serviceText">
            <p>{t("mobileMP1")}</p>
            <img
              src="/icons/mobilefirst.png"
              className="imageservices"
              title="mobile-first"
              alt="mobile-first"
              width="100px"
              height="100px"
            />
            <p>{t("mobileMP2")} </p>
            <p>{t("mobileMP3")}</p>

            <p>{t("mobileMP4")}</p>

            <p>{t("mobileMP5")}</p>
          </div>
          <h2> {t("relevanttools")}</h2>
          <div className="serviceText">
            <footer>
              <a
                target="_blank"
                href="https://search.google.com/test/mobile-friendly"
              >
                Google's Mobile Friendly Test
              </a>{" "}
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
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/pagespeed"}
            >
              {t("technicalHP4")}
            </a>
            <a className="block bold">{t("technicalHP5")}</a>
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
export default translate("translations")(MobileFriendly);
