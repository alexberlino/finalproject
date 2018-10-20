import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class SEA extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEA</title>
        </Helmet>SEA
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceTitle"> What I can deliver to you</div>
      </div>
    );
  }
}

export default translate("translations")(SEA);
