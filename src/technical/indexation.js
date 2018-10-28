import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Indexation extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO: Indexation|| SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <h1 className="h1services"> Indexation, redirects and urls.</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Efficient Indexation is key in order to get on well with Google's
          spiders. Many belive the more pages indexed the better; that is only
          true to a certain level. If you have many non-valuable, not-visite or
          duplicate pages indexed for example, the bot will likely limit your
          "crawling credit" and discard those pages which you value most.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Make sure all the important pages are indexed and that those you do
          not want indexed are not. Check on duplicate or irrelevant indexed
          pages and work on a plan to have those pages de-indexed. Check on your
          redirects, make sure you are using the correct status codes and the
          url structure.
        </div>
      </div>
    );
  }
}

export default translate("translations")(Indexation);
