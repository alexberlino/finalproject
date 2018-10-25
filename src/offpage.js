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

class Offpage extends Component {
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
          <title>Off-page SEO || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <div className="infoTitle">
          {" "}
          <img
            alt="offpage"
            src="/offpage.svg"
            className="logoAnimationServices"
          />
          <h1> Off-page SEO Audit</h1>
        </div>

        <div className="services">
          <div className={this.state.hide + " leftServices"}>
            <p
              className="listServices orange2"
              onClick={() => this.handleClick(2)}
            >
              {t("offpageHP1")} {t("offpageHP2")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(1)}
            >
              {t("offpageHP3")} {t("offpageHP4")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(3)}
            >
              {t("offpageHP5")}
            </p>
          </div>

          <div className={this.state.toggle + " rightServices"}>
            <div className="closeX" onClick={() => this.handleClickClose()}>
              {" "}
              X{" "}
            </div>
            {this.state.show == 1 ? <BrandBuilding /> : null}
            {this.state.show == 2 ? <BacklinkAnalysis /> : null}
            {this.state.show == 3 ? <Toxic /> : null}
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

export default translate("translations")(Offpage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
