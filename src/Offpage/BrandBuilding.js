import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BrandBuilding extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Off-page: brandbuilding SEO Berlino</title>
        </Helmet>
        <h1 className="h1services"> Brandbuilding </h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Your links represent your reputation and relevancy in your domain.
          Linkbuilding now goes hand in hand with brandbuilding.
        </div>
        <div className="serviceTitle"> What we can deliver to you</div>
        <div className="serviceText">
          After doing an audit of your link profile and of your main SEO
          competitors, research influencers sources and websites where your
          potential users visit when making their investigation or deciding on
          which company to use.
        </div>
      </div>
    );
  }
}

export default translate("translations")(BrandBuilding);
