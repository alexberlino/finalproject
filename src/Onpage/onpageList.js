import React, { Component } from "react";
import ReactDOM from "react";
import LinksToPages from "../LinksToPages";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";

class OnpageList extends Component {
  handleClick(n) {
    this.setState({
      show: n,
      toggle: "",
      hide: "hide",
      hide2: "hide2"
    });
  }
  render() {
    const { t, i18n } = this.props;

    return (
      <div>
        <div className={this.props.hide + " leftServices"}>
          <Link to="/en/onpage/keywordresearch">
            {" "}
            <p
              className="listServices green2"
              onClick={() => this.props.handleClick(1)}
            >
              {t("onpageHP1")}{" "}
            </p>
          </Link>
          <p
            className="listServices green2"
            onClick={() => this.props.handleClick(2)}
          >
            {t("onpageHP2")}
          </p>
          <p
            className="listServices orange2"
            onClick={() => this.props.handleClick(3)}
          >
            {t("onpageHP3")} {t("onpageHP5")}
          </p>
          <p
            className="listServices green2"
            onClick={() => this.props.handleClick(4)}
          >
            {t("onpageHP4")}
          </p>
          <p
            className="listServices orange2"
            onClick={() => this.props.handleClick(5)}
          >
            {t("onpageHP6")}
          </p>
          <p
            className="listServices orange2"
            onClick={() => this.props.handleClick(6)}
          >
            {t("onpageHP7")}
          </p>
          <p
            className="listServices green2"
            onClick={() => this.props.handleClick(7)}
          >
            {t("onpageHP8")}
          </p>
          <p
            className="listServices orange2"
            onClick={() => this.props.handleClick(8)}
          >
            {t("onpageHP9")}
          </p>
          <p
            className="listServices green2"
            onClick={(() => this.props, handleClick(9))}
          >
            {t("onpageHP10")}
          </p>
        </div>{" "}
        <div className="black slide-in-left sideLinks">
          <a className="block" href="/en/onpage/keywordresearch">
            {t("onpageHP1")}
          </a>
          <a className="block" href="/en/onpage/landingpages">
            {t("onpageHP2")}
          </a>
          <a className="block" href="/en/onpage/internallinking">
            {t("onpageHP3")} {t("onpageHP5")}
          </a>{" "}
          <a className="block" href="/en/onpage/metas">
            {t("onpageHP4")}
          </a>
          <a className="block" href="/en/technical/mobilefriendly">
            <a className="block" href="/en/onpage/content">
              {t("onpageHP6")}
            </a>
          </a>
          <a className="block" href="/en/onpage/images">
            {t("onpageHP7")}
          </a>
          <a className="block" href="/en/onpage/structureddata">
            {t("onpageHP8")}
          </a>{" "}
          <a className="block" href="/en/onpage/duplicatecontent">
            {t("onpageHP9")}
          </a>
          <a className="block" href="/en/onpage/voicesearch">
            {t("onpageHP10")}
          </a>
        </div>
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(OnpageList);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
