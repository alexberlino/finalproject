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
import Crawlability from "./technical/crawlability";
import DynamicRendering from "./technical/dynamicrendering";
import Indexation from "./technical/indexation";
import Internationalisation from "./technical/internationalisation";
import MobileFriendly from "./technical/mobilefriendly";
import PageSpeed from "./technical/pagespeed";
import Security from "./technical/security";
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
            Technical SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO Freelancer in Berlin: indexation, crawlability, internationalisation, pagespeed, etc "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical"
          />
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Technical SEO </h1>
            <img
              alt="technical"
              src="/technical.svg"
              className="logoAnimationServices"
            />
          </div>

          <div className="services">
            <div className="black leftServices">
              <p className="listServices">
                <a href="/en/technical/indexation">{t("technicalHP1")}</a>
              </p>
              <p className="listServices">
                <a href="/en/technical/crawlability">{t("technicalHP2")}</a>
              </p>
              <p className="listServices">
                <a href="/en/technical/internationalisation">
                  {t("technicalHP3")}
                </a>
              </p>
              <p className="listServices">
                <a href="/en/technical/pagespeed">{t("technicalHP4")}</a>
              </p>
              <p className="listServices">
                <a href="/en/technical/mobilefriendly">{t("technicalHP5")}</a>
              </p>
              <p className="listServices">
                <a href="/en/technical/dynamicrendering">{t("technicalHP6")}</a>
              </p>
              <p className="listServices">
                <a href="/en/technical/security">{t("technicalHP7")}</a>
              </p>
            </div>
          </div>

          <LinksToPages
            pageChange={this.props.pageChange}
            lang={this.props.lng}
          />
        </div>
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
