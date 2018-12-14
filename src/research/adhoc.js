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
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/adhoc"
          />
        </Helmet>

        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
        </div>

        <h2 className="h1services"> Research & Analytics: Ad-hoc</h2>
        <div className="serviceText">
          Some SEO requests can be quite specific and not fit in one of the
          categorisations listed yet.
        </div>
      </div>
    );
  }
}

export default translate("translations")(Adhoc);
