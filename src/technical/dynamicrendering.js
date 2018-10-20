import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class DynamicRendering extends Component {
  render() {
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO: DynamicRendering || SEO Berlino</title>
        </Helmet>DynamicRendering
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceTitle"> What I can deliver to you</div>
      </div>
    );
  }
}

export default translate("translations")(DynamicRendering);
