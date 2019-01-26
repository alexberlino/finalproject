import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import ContactMain from "./ContactMain";

class Resources extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO - Search Engine Optimization || SEOBerlino</title>
          <meta
            name="description"
            content="SEO Expertise: Onpage SEO, Offpage SEO, Technical SEO, Analytics and SEO Research."
          />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng + "/resources"}
          />
        </Helmet>
        <img
          src="/auditmainpic/structured.jpg"
          title="analysis, a photo by rawpixel"
          alt="SEO Analysis and Research"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />
            <a href={"/" + this.props.lang}> {t("services")} </a>{" "}
            <img className="iconsmore2" src="/arrow.png" />
            <a className="bold"> SEO </a>{" "}
          </div>

          <div className="infoTitle">
            <h1 className="h1services">SEO</h1>
          </div>

          <div className="marginright black">
            <div className="black slide-in-left sideLinks">
              <a className="block" href={"/" + this.props.lng + "/onpage"}>
                ONPAGE
              </a>
              <a className="block" href={"/" + this.props.lng + "/offpage"}>
                OFFPAGE
              </a>
              <a className="block" href={"/" + this.props.lng + "/technical"}>
                {t("technical")}{" "}
              </a>{" "}
              <a className="block" href={"/" + this.props.lng + "/research"}>
                RESEARCH & ANALYTICS
              </a>{" "}
              <a className="block" href={"/" + this.props.lng + "/seonews"}>
                SEONEWS
              </a>{" "}
            </div>
            <p className="italic">{t("auditintro")}</p>
            <br />{" "}
            <h2>
              <a href={"/" + this.props.lng + "/onpage/keywordresearch"}>
                {t("hey4")}
              </a>{" "}
              & <a href={"/" + this.props.lng + "/onpage"}>Onpage SEO</a>
            </h2>
            <p>
              {t("auditintro2")}{" "}
              <a href={"/" + this.props.lng + "/onpage"} className="block" />
            </p>
            <br />
            <h2>
              <a href={"/" + this.props.lng + "/technical"}>{t("hey5")}</a>
            </h2>
            <p>
              {t("auditintro3")}{" "}
              <a href={"/" + this.props.lng + "/technical"} className="block" />
            </p>
            <br />
            <h2>
              <a href={"/" + this.props.lng + "/offpage"}>Offpage SEO</a>
            </h2>
            <p>
              {t("auditintro4")}{" "}
              <a href={"/" + this.props.lng + "/offpage"} className="block" />{" "}
            </p>{" "}
            <br />
            <h2>
              <a href={"/" + this.props.lng + "/research"}>
                {t("hey7")}, Analytics, SEA & {t("analyticsHP1")}
              </a>
            </h2>
            <p>
              {t("auditintro5")}{" "}
              <a href={"/" + this.props.lng + "/research"} className="block" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Resources);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
