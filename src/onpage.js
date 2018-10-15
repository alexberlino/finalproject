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

class Onpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { t, i18n } = this.props;
    console.log(this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>On-page SEO || SEO Berlino</title>
        </Helmet>

        <div>
          <div className="infoTitle"> On-page SEO </div>
          <div className="infoIntro">{t("onpageSEO1")}</div>
          <div className="infoMain">{t("onpageSEO2")}</div>
          <div className="infoMain">
            {" "}
            Increase the number of visitors through top Google rankings with the
            keywords that matter. ​ Get helps to find the most valuable keywords
            which best define your business through the eyes of your customers
            and enable you to generate more revenues. We will analyse your site
            and pages structure to find errors, through a complete report with
            step by step explanation and ordered by prioritisation. ​ Then we
            will look at more technical aspects of SEO which are now paramount
            for good rankings including indexation, canonicalization and
            crawlability.
          </div>
        </div>
        <div>
          <LinksToPages
            pageChange={this.props.pageChange}
            lang={this.props.lng}
          />
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
