import React, { Component } from "react";
import ReactDOM from "react";

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
        </div>
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
