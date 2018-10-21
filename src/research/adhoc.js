import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Adhoc extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Research & Analytics: Ad-hoc || SEO Berlino</title>
        </Helmet>
        <h1 className="h1services"> Research & Analytics: Ad-hoc</h1>
        <div className="serviceTitle"> What we can deliver to you</div>
        <div className="serviceText">
          Some SEO requests can be quite specific and not fit in one of the
          categorisations listed yet. Still not hesitate to reach out and
          explain your needs.
        </div>
      </div>
    );
  }
}

export default translate("translations")(Adhoc);
