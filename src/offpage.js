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

class Offpage extends Component {
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
          <title>Off-page SEO Berlino</title>
        </Helmet>
        <div>
          <div className="infoTitle"> Off-page SEO </div>
          <div className="infoIntro">{t("offpage_intro")}</div>
          <div className="infoMain">{t("offpage_main")}</div>
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
