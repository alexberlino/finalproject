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
import Adhoc from "./research/adhoc";
import Analytics from "./research/analytics";
import BestPractices from "./research/bestpractices";
import LocalSEO from "./research/localseo";
import SEA from "./research/sea";

class Technical extends Component {
  constructor() {
    super();
    this.state = {
      show: null,
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
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <div className="infoTitle">
          {" "}
          <img
            alt="research and analytics"
            src="/analytics.svg"
            className="logoAnimationServices"
          />
          <h1> Research and Analytics</h1>
        </div>

        <div className="services">
          <div className={this.state.hide + " leftServices"}>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(1)}
            >
              {t("analyticsHP1")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(2)}
            >
              {t("analyticsHP2")}
            </p>
            <p
              className="listServices orange2"
              onClick={() => this.handleClick(3)}
            >
              {t("analyticsHP4")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(4)}
            >
              {t("analyticsHP5")}
            </p>
            <p
              className="listServices orange2"
              onClick={() => this.handleClick(5)}
            >
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
