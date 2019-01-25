import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import Helmet from "react-helmet";
import ContactMain from "./ContactMain";

class Services extends Component {
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
          <title>{t("servicestitle")}</title>
          <meta
            name="description"
            content="SEO Services Audit Ad-hoc - SEO Consultant in Berlin"
          />
          <link rel="canonical" href={"/" + this.props.lang + "/services"} />
        </Helmet>

        <div className="services2">
          <div className="infoTitle">
            <br />
            <br />
            <h1 className="h1services2">{t("servicesh1")}</h1>
          </div>
          <div className="intro20">
            <div className="introQuarter">
              {" "}
              <div className="transparent"> </div>
              <h2>Express-Audit (15-20 {t("hours")})</h2>
              <p className="txt2"> {t("execsumm")}</p>
              <p className="txt2"> {t("onpageHP1")}(Main Keywords)</p>
              <p className="txt2">Express Website Crawl: {t("listmain")}</p>
              <p className="txt2">Backlink Audit</p>
              <p className="txt2">
                {t("hey5")}: {t("technicalHP4")} & {t("technicalHP5")} &
                crawlability
              </p>
              <p className="txt2">
                {" "}
                {t("bestpractMPh1")} (1 {t("competitor")})
              </p>
            </div>
            <div className="introQuarter">
              <div className="transparent"> </div>

              <h2>Full Audit (30-40 {t("hours")})</h2>
              <p className="txt2"> {t("execsumm")}</p>

              <p className="txt2"> In-depth {t("onpageHP1")}</p>

              <p className="txt2">
                WebSite Crawl onpage: {t("listmain")} ({t("onpageHP7")},
                content, {t("onpageHP3")}, metas, {t("onpageHP10")})
              </p>
              <p className="txt2">
                In-depth {t("bestpractMP4")} incl. toxic link analysis,{" "}
                {t("catlinks")}
              </p>

              <p className="txt2">
                {t("hey5")}: {t("technicalHP1")} & {t("technicalHP4")} &{" "}
                {t("technicalHP5")} & {t("technicalHP2")}
              </p>

              <p className="txt2">{t("bestpractMPh1")} (min. 2)</p>
            </div>
          </div>
          <div className="intro20">
            <div className="introQuarter">
              <div className="transparent"> </div>{" "}
              <h2>Website Crawl (min 6 {t("hours")} )</h2>
              <p className="txt2"> {t("execsumm")}</p>
              <p className="txt2">Website Crawl: {t("listmain")}</p>
              <h2>
                {t("bestpractMP4")}(min 6 {t("hours")})
              </h2>
              <p className="txt2"> {t("execsumm")}</p>
              <p className="txt2"> {t("offpageHP1")}</p>
              <p className="txt2">
                {t("hey7")} & {t("bestpractMP4")}
              </p>
              <h2>
                {t("onpageHP1")} (min 6 {t("hours")})
              </h2>
              <p className="txt2"> In-depth {t("onpageHP1")}</p>
              <p className="txt2">
                {" "}
                {t("onpageHP10")} ( {t("voiceMPT2")})
              </p>
            </div>

            <div className="introQuarter">
              <div className="transparent"> </div>

              <h2>Ad-hoc</h2>
              <p className="txt2">
                {t("onpageHP1")} for {t("brandbuildingMPT4")}(incl. for{" "}
                {t("onpageHP10")})
              </p>
              <p className="txt2">{t("technicalHP3")} incl. href lang</p>
              <p className="txt2"> {t("technicalHP2")}: robots, sitemaps</p>
              <p className="txt2"> Brand building/ Backlinking </p>
              <p className="txt2"> {t("onpageHP8")}</p>
              <p className="txt2">Analytics </p>
              <p className="txt2"> {t("analyticsHP1")}</p>

              <p className="txt2"> SEA</p>
            </div>
          </div>
          <a className="servicesHP2" href={"/" + this.props.lang + "/contact"}>
            <button className="servicesHP2">{t("getintouch")}</button>
          </a>
          <br /> <br /> <br />
        </div>
      </div>
    );
  }
}

export default translate("translations")(Services);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
