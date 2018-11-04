import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class DuplicateContent extends Component {
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
          <title>Duplicate Content SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <h1 className="h1services"> Duplicate Content and Canonicals</h1>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Search Engines do not like duplicate content indexed. If you have many
          similar pages and you are not flagging them, these pages will not rank
          well.
        </div>
        <img src="/content.svg" className="serviceImage" />

        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Identify duplicate content, assess status and design "master page",
          deindex unnecessary pages using canonicals, 410s or redirects
          accordingly.
        </div>
      </div>
    );
  }
}

export default translate("translations")(DuplicateContent);
