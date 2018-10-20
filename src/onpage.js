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
import KeywordResearch from "./Onpage/KeywordResearch";
import LandingPageOptimization from "./Onpage/LandingPageOptimization";
import InternalLinking from "./Onpage/InternalLinking";
import Content from "./Onpage/Content";
import Images from "./Onpage/Images";
import StructuredData from "./Onpage/StructuredData";
import DuplicateContent from "./Onpage/DuplicateContent";
import VoiceSearch from "./Onpage/VoiceSearch";
import Metas from "./Onpage/Metas";

class Onpage extends Component {
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
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.state);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>On-page SEO || SEO Berlino</title>
        </Helmet>
        <img src="/onpage.svg" className="logoAnimationServices" />
        <div className="infoTitle"> On-page SEO Audit </div>

        <div className="services">
          <div className={this.state.hide + " leftServices"}>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(1)}
            >
              {t("onpageHP1")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(2)}
            >
              {t("onpageHP2")}
            </p>
            <p
              className="listServices orange2"
              onClick={() => this.handleClick(3)}
            >
              {t("onpageHP3")} {t("onpageHP5")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(4)}
            >
              {t("onpageHP4")}
            </p>
            <p
              className="listServices orange2"
              onClick={() => this.handleClick(5)}
            >
              {t("onpageHP6")}
            </p>
            <p
              className="listServices orange2"
              onClick={() => this.handleClick(6)}
            >
              {t("onpageHP7")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(7)}
            >
              {t("onpageHP8")}
            </p>
            <p
              className="listServices orange2"
              onClick={() => this.handleClick(8)}
            >
              {t("onpageHP9")}
            </p>
            <p
              className="listServices green2"
              onClick={() => this.handleClick(9)}
            >
              {t("onpageHP10")}
            </p>
          </div>

          <div className={this.state.toggle + " rightServices"}>
            <div className="closeX" onClick={() => this.handleClickClose()}>
              {" "}
              X{" "}
            </div>
            {this.state.show == 1 ? <KeywordResearch /> : null}
            {this.state.show == 2 ? <LandingPageOptimization /> : null}
            {this.state.show == 3 ? <InternalLinking /> : null}
            {this.state.show == 4 ? <Metas /> : null}
            {this.state.show == 5 ? <Content /> : null}
            {this.state.show == 6 ? <Images /> : null}
            {this.state.show == 7 ? <StructuredData /> : null}
            {this.state.show == 8 ? <DuplicateContent /> : null}
            {this.state.show == 9 ? <VoiceSearch /> : null}
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

export default translate("translations")(Onpage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
