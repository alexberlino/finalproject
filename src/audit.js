import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import Blog from "./blog";

class Audit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Audit || SEO Berlino</title>
        </Helmet>
        <div>
          <div className="infoTitle"> SEO Audit </div>
          <div className="infoIntro"> {t("audit_intro")} </div>
          <div className="infoMain">{t("audit_main")}</div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Audit);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
