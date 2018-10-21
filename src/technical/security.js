import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Security extends Component {
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
          <title>Technical SEO: Security SEO Berlino</title>
        </Helmet>
        <h1 className="h1services"> Security, HTTPS transition</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Https for "early-adopters" may have given them an advantage on their
          competitors, but now it has become the norm. If you haven't made the
          transition yet, it needs to be very high on your priority list.
        </div>
        <div className="serviceTitle"> What I can deliver to you</div>
        <div className="serviceText">
          Help you with plan on how to make the migrations, incluing identify
          pages to redirect (which should be most), and those you should not,
          technical challenges to plan and timing.
        </div>
      </div>
    );
  }
}

export default translate("translations")(Security);
