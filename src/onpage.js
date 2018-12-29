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

        <div className="main2 black">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> EXPERTISE ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <div className="infoTitle">
            <h1>Onpage SEO Audit - SEO Freelancer</h1>

            <img
              alt="onpage"
              src="/onpage.svg"
              className="logoAnimationServices"
            />
          </div>
          <div className="services">
            <div className={this.state.hide + " leftServices"}>
              <p className="listServices">
                <a href="/en/onpage/keywordresearch">{t("onpageHP1")}</a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/landingpages">{t("onpageHP2")}</a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/internallinking">
                  {t("onpageHP3")} {t("onpageHP5")}
                </a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/metas">{t("onpageHP4")}</a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/content">{t("onpageHP6")}</a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/images">{t("onpageHP7")}</a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/structureddata">{t("onpageHP8")}</a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/duplicatecontent">{t("onpageHP9")}</a>
              </p>
              <p className="listServices">
                <a href="/en/onpage/voicesearch">{t("onpageHP10")}</a>
              </p>
            </div>

            <div className={this.state.toggle + " rightServices"}>
              <div className="closeX" onClick={() => this.handleClickClose()}>
                {" "}
                X{" "}
              </div>
            </div>
          </div>
          <div className={this.state.hide2}>
            <div className="linkstoPageMainDiv2">
              <ul>
                <li>
                  <a href={"/" + this.props.lng + "/onpage/content"}>
                    CONTENT OPTIMIZATION
                  </a>
                </li>
                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/duplicatecontent"}>
                    DUPLICATE CONTENT
                  </a>
                </li>
                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/images"}>
                    IMAGE OPTIMIZATION{" "}
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/internallinking"}>
                    INTERNAL LINKING{" "}
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/keywordresearch"}>
                    KEYWORD RESEARCH
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/landingpages"}>
                    LANDING PAGE OPTIMIZATION
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/metas"}>METAS</a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/structureddata"}>
                    STRUCTURED DATA
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/onpage/voicesearch"}>
                    VOICE SEARCH
                  </a>
                </li>
              </ul>
            </div>

            <LinksToPages
              pageChange={this.props.pageChange}
              lang={this.props.lng}
            />
          </div>
        </div>
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
