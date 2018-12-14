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
    this.state = {
      show: 1,
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
    console.log(this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Research and Analytics || SEO Berlino</title>
          <meta
            name="description"
            content="Research SEO Jobs: local SEO, Analytics, best practice, SEA"
          />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng + "/research"}
          />
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
        </div>

        <div className="infoTitle">
          {" "}
          <img
            alt="research and analytics"
            src="/analytics.svg"
            className="logoAnimationServices"
          />
          <h1 className="infoTitle"> RESEARCH AND ANALYTICS</h1>
        </div>

        <div className="services">
          <div className={this.state.hide + " leftServices"}>
            <p className="listServices" onClick={() => this.handleClick(1)}>
              {t("analyticsHP1")}
            </p>
            <p className="listServices" onClick={() => this.handleClick(2)}>
              {t("analyticsHP2")}
            </p>
            <p className="listServices" onClick={() => this.handleClick(3)}>
              {t("analyticsHP4")}
            </p>

            <p className="listServices" onClick={() => this.handleClick(5)}>
              {t("analyticsHP6")}
            </p>
          </div>

          <div className={this.state.toggle + " rightServices"}>
            <div className="closeX" onClick={() => this.handleClickClose()}>
              {" "}
              X{" "}
            </div>
            {this.state.show == 1 ? <LocalSEO /> : null}
            {this.state.show == 2 ? <Analytics /> : null}
            {this.state.show == 3 ? <BestPractices /> : null}
            {this.state.show == 4 ? <Adhoc /> : null}
            {this.state.show == 5 ? <SEA /> : null}
          </div>
        </div>
        <div className="linkstoPageMainDiv2">
          <ul>
            <li>
              {" "}
              <a href={"/" + this.props.lng + "/research/analytics"}>
                ANALYTICS{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href={"/" + this.props.lng + "/research/bestpractices"}>
                BEST PRACTICE{" "}
              </a>
            </li>

            <li>
              {" "}
              <a href={"/" + this.props.lng + "/research/localseo"}>
                LOCAL SEO{" "}
              </a>
            </li>

            <li>
              {" "}
              <a href={"/" + this.props.lng + "/research/sea"}>SEA </a>
            </li>
          </ul>
        </div>

        <div className={this.state.hide2}>
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
