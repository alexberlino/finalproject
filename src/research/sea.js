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
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEA, Search Engine Advertising || SEO Berlino</title>
        </Helmet>
        <h1 className="h1services"> SEA, Search Engine Advertising</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Paid Search uses the same base as SEO in keywords, and of course share
          the same space in SERPs (Search Engine Result Pages). With poor SEO
          visibility, SEA helps you to get those first visits to get going
          and/or get visibility and bran awareness using the Display Network.
        </div>
        <div className="serviceTitle"> What we can deliver to you</div>
        <div className="serviceText">
          Adwords Set-up and/or optimization, landing pages testing. Keywords
          bid ajustments depending on the strategy.
        </div>
        <div className="serviceTitle"> Releted Tools and Resources</div>
        <div className="serviceText">
          <footer>Adwords </footer>
        </div>
      </div>
    );
  }
}

export default translate("translations")(SEA);
