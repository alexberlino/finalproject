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
import Pres from "./pres";

class Technical extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("LOCATION", location);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Berlino</title>
        </Helmet>
        <div className="container">
          <div className="filterDiv">
            <h2 />
          </div>

          <div className="intro">
            <p className="txt"> {t("intro1")}</p>
            <p className="txt"> {t("intro2")}</p>
            <p className="txt"> {t("intro3")}</p>
          </div>
        </div>
      </div> //Main
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
