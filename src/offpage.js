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
import BacklinkAnalysis from "./Offpage/BacklinkAnalysis";
import BrandBuilding from "./Offpage/BrandBuilding";
import Toxic from "./Offpage/Toxic";
import ContactMain from "./ContactMain";

class Offpage extends Component {
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
            Off-page SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Offpage SEO Jobs: backlink competitor analysis, backlink profile, bradnbuilding opportunities, toxic link cleaning, best practice"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/offpage" />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Offpage SEO Audit</h1>

            <img
              alt="offpage"
              src="/offpage.svg"
              className="logoAnimationServices"
            />
          </div>

          <div className="services black">
            <div className="black leftServices">
              <table>
                <tr>
                  {" "}
                  <th bgColor="lightblue">
                    <a href="/en/offpage/backlinkanalysis">
                      {t("offpageHP1")} {t("offpageHP2")}
                    </a>
                  </th>{" "}
                  <th bgColor="beige">
                    {" "}
                    <a href="/en/offpage/brandbuilding">
                      {t("offpageHP3")} {t("offpageHP4")}
                    </a>{" "}
                  </th>{" "}
                </tr>

                <tr>
                  {" "}
                  <th bgColor="beige">
                    <a href="/en/offpage/toxic">{t("offpageHP5")}</a>
                  </th>{" "}
                </tr>
              </table>
            </div>{" "}
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

export default translate("translations")(Offpage);
