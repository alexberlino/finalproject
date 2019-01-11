import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import Helmet from "react-helmet";
import LinksToPages from "./LinksToPages";
import KeywordResearch from "./Onpage/KeywordResearch";
import LandingPageOptimization from "./Onpage/LandingPageOptimization";
import InternalLinking from "./Onpage/InternalLinking";
import Content from "./Onpage/Content";
import Images from "./Onpage/Images";
import StructuredData from "./Onpage/StructuredData";
import DuplicateContent from "./Onpage/DuplicateContent";
import VoiceSearch from "./Onpage/VoiceSearch";
import Metas from "./Onpage/Metas";
import ContactMain from "./ContactMain";

class Onpage extends Component {
  constructor() {
    super();
    this.state = {};
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
          <title>
            On-page SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Onpage SEO Freelancer: Keyword research, landing pages, internal linking, metas, images and SD"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/onpage" />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/onpage.jpg"
            title="onpage SEO, a photo by Noémi Macavei-Katócz"
            alt="Onpage SEO"
            height="450px"
            width="85%"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Onpage SEO Audit</h1>
          </div>
          <div>
            <div className="marginright">
              <div className="black slide-in-left sideLinks">
                <a className="block" href="/en/onpage/keywordresearch">
                  {t("onpageHP1")}
                </a>
                <a className="block" href="/en/onpage/landingpages">
                  {t("onpageHP2")}
                </a>
                <a className="block" href="/en/onpage/internallinking">
                  {t("onpageHP3")} {t("onpageHP5")}
                </a>{" "}
                <a className="block" href="/en/onpage/metas">
                  {t("onpageHP4")}
                </a>
                <a className="block" href="/en/technical/mobilefriendly">
                  <a className="block" href="/en/onpage/content">
                    {t("onpageHP6")}
                  </a>
                </a>
                <a className="block" href="/en/onpage/images">
                  {t("onpageHP7")}
                </a>
                <a className="block" href="/en/onpage/structureddata">
                  {t("onpageHP8")}
                </a>{" "}
                <a className="block" href="/en/onpage/duplicatecontent">
                  {t("onpageHP9")}
                </a>
                <a className="block" href="/en/onpage/voicesearch">
                  {t("onpageHP10")}
                </a>
              </div>
              <p className="italic">{t("onpageintro")}</p>
              <br />
              <h2>Keyword Research</h2>
              <p>{t("onpageintro2")}</p>
              <br />
              <h2>Importance of on-page SEO</h2>
              <p>{t("onpageintro3")}</p>
              <br />
              <h2>Essential on-page SEO factors</h2>
              <p>{t("onpageintro4")}</p> <br />
            </div>{" "}
          </div>
        </div>
        <div>
          <LinksToPages />
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Onpage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
