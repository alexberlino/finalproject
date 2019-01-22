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
    console.log("PROPS" + this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Audit - Search Engine Optimization || SEOBerlino</title>
          <meta
            name="description"
            content="SEO Expertise: Onpage SEO, Offpage SEO, Technical SEO, Analytics and SEO Research."
          />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng + "/resources"}
          />
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />
            <a href={"/" + this.props.lang}> {t("services")} </a>{" "}
            <img className="iconsmore2" src="/arrow.png" />
            <a className="bold"> AUDIT </a>{" "}
          </div>
          <div className="transparent2" />

          <div className="infoTitle">
            <h1 className="h1services">SEO Audit</h1>
          </div>

          <div>
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
                  Keyword Research
                </a>{" "}
                & <a href={"/" + this.props.lng + "/onpage"}>Onpage SEO</a>
              </h2>
              <p>
                {t("auditintro2")}{" "}
                <a href={"/" + this.props.lng + "/onpage"} className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>
              </p>
              <br />
              <h2>
                <a href={"/" + this.props.lng + "/technical"}>Technical SEO</a>
              </h2>
              <p>
                {t("auditintro3")}{" "}
                <a href={"/" + this.props.lng + "/technical"} className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>
              </p>
              <br />
              <h2>
                <a href={"/" + this.props.lng + "/offpage"}>Offpage SEO</a>
              </h2>
              <p>
                {t("auditintro4")}{" "}
                <a href={"/" + this.props.lng + "/offpage"} className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>{" "}
              </p>{" "}
              <br />
              <h2>
                <a href={"/" + this.props.lng + "/research"}>
                  Competitor Analysis, Analytics, SEA and Local SEO
                </a>
              </h2>
              <p>
                {t("auditintro5")}{" "}
                <a href={"/" + this.props.lng + "/research"} className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>
              </p>
            </div>
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
