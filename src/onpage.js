import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";

class Onpage extends Component {
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
          <title>On-page SEO - John Smith</title>
        </Helmet>

        <div>
          <div className="infoTitle"> On-page SEO </div>
          <div className="infoIntro">{t("onpageSEO1")}</div>
          <div className="infoMain">{t("onpageSEO2")}</div>
        </div>
      </div> //Main
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
