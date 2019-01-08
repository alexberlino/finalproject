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
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Analytics and Research</h1>

            <img
              alt="research and analytics"
              src="/analytics.svg"
              className="logoAnimationServices"
            />
          </div>

          <div className="services">
            <div className="black leftServices">
              <table>
                <tr>
                  {" "}
                  <th bgColor="lightblue">
                    <a href="/en/research/localseo">{t("analyticsHP1")}</a>
                  </th>{" "}
                  <th bgColor="beige">
                    {" "}
                    <a href="/en/research/analytics">{t("analyticsHP2")}</a>
                  </th>{" "}
                </tr>

                <tr>
                  {" "}
                  <th bgColor="beige">
                    <a href="/en/technical/internationalisation">
                      <a href="/en/research/bestpractices">
                        {t("analyticsHP3")}
                      </a>
                    </a>{" "}
                  </th>{" "}
                  <th>
                    {" "}
                    <a href="/en/research/sea">{t("analyticsHP6")}</a>
                  </th>{" "}
                </tr>
              </table>
            </div>
          </div>

          <div className={this.state.hide2}>
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

export default translate("translations")(Technical);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
