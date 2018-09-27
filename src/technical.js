import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";

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
        <div>
          <div className="infoTitle"> Technical SEO </div>
          <div className="infoIntro">
            Technical SEO Optimization regroups all on-page SEO which is not
            content related.
          </div>
          <div className="infoMain">
            Technical SEO Optimization regroups all on-page SEO which is not
            content related. For a Technical Audit, we will review, report and
            present an action plan for these topics: ​ Pagespeed, consequences
            of Google algorithms changes, crawl (robots, noindex/follow,
            sitemaps, etc), redirects, duplicate content & canonicals,
            indexation, URL Canonicalization, image optimization, site
            structure, internal linking etc...
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
