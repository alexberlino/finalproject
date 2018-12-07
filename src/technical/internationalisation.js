import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Internationalisation extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO: Internationalisation || SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <h2 className="h1services"> Internationalisation</h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          There are various options when operating internationally: same root
          domain, different top level domains, how to link between them, how to
          simplify the process without affecting your SEO.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Audit or help you set-up an effective SEO strategy depending on your
          requirements and resources. Make sure the language meta tags and
          settings the Search console are set-up, evaluate any possible SEO
          damage if using client-side rendering with a mixed url structure.
        </div>
      </div>
    );
  }
}

export default translate("translations")(Internationalisation);
