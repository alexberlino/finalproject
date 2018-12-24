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
    this.state = {
      show: "",
      toggle: "hideRightServices",
      hide: null,
      hide2: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }
  handleClick(n) {
    this.setState({
      show: n,
      toggle: "",
      hide: "hide",
      hide2: "hide2"
    });
  }

  handleClickClose() {
    this.setState({
      toggle: "hideRightServices",
      hide: "show",
      hide2: null
    });
    window.scrollTo(0, 0);
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
          <title>Off-page SEO || SEO Berlino</title>
          <meta
            name="description"
            content="Offpage SEO Jobs: backlink competitor analysis, backlink profile, bradnbuilding opportunities, toxic link cleaning, best practice"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/offpage" />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb2">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>

          <div className="infoTitle">
            <h1>Offpage SEO Audit - SEO Freelancer</h1>

            <img
              alt="offpage"
              src="/offpage.svg"
              className="logoAnimationServices"
            />
          </div>

          <div className="services">
            <div className={this.state.hide + " leftServices"}>
              <p className="listServices" onClick={() => this.handleClick(2)}>
                {t("offpageHP1")} {t("offpageHP2")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(1)}>
                {t("offpageHP3")} {t("offpageHP4")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(3)}>
                {t("offpageHP5")}
              </p>
            </div>

            <div className={this.state.toggle + " rightServices"}>
              {this.state.show == 1 ? <BrandBuilding /> : null}
              {this.state.show == 2 ? <BacklinkAnalysis /> : null}
              {this.state.show == 3 ? <Toxic /> : null}
            </div>
          </div>

          <div className={this.state.hide2}>
            <div className="linkstoPageMainDiv2">
              <ul>
                <li>
                  <a href={"/" + this.props.lng + "/offpage/backlinkanalysis"}>
                    BACKLINK ANALYSIS
                  </a>
                </li>
                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/offpage/brandbuilding"}>
                    BRAND BUILDING
                  </a>
                </li>
                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/offpage/toxic"}>
                    TOXIC LINKS
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

export default translate("translations")(Offpage);
