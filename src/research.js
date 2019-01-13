import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "./LinksToPages";
import Analytics from "./research/analytics";
import BestPractices from "./research/bestpractices";
import LocalSEO from "./research/localseo";
import SEA from "./research/sea";
import ContactMain from "./ContactMain";

class Technical extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Research SEO & Analytics | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Research SEO Jobs: local SEO, Analytics, best practice, SEA"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/research" />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/analysis.jpg"
            title="analysis, a photo by rawpixel"
            alt="SEO Analysis and Research"
            width="90%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Analytics, Research and more</h1>
          </div>
          <div>
            <div className="marginright">
              <div className="black slide-in-left sideLinks">
                <a className="block" href="/en/research/localseo">
                  {t("analyticsHP1")}
                </a>
                <a className="block" href="/en/research/analytics">
                  {t("analyticsHP2")}
                </a>
                <a className="block" href="/en/research/bestpractices">
                  {t("analyticsHP3")}
                </a>
                <a className="block" href="/en/research/sea">
                  {t("analyticsHP6")}
                </a>
              </div>
              <p>
                {" "}
                If you have a local business, like a shop, or have people
                visiting your office frequently, optimizing your website is also
                about making sure people are able to find you in real life. But
                even if your not actively getting visitors in your building, but
                are targeting an audience that is located in the same
                geographical area as you are, you need to optimize for that
                area. This is what we call “local SEO.”
              </p>
              <p>
                Web analytics is the measurement, collection, analysis and
                reporting of web data for purposes of understanding and
                optimizing web usage. ... Web analytics provides information
                about the number of visitors to a website and the number of page
                views.
              </p>
              <p>
                The basics of search engine advertising. Search engine
                advertising (SEA) is a branch of search engine marketing (SEM).
                While search engine optimization (SEO) centers on improving
                accessibility with the use of keywords, SEA places the paid
                advert directly into the search engine results and on partner
                websites.
              </p>
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

export default translate("translations")(Technical);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
