import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Cookies extends Component {
  componentDidMount() {}

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
          <title>Cookies || SEO Berlino</title>
        </Helmet>

        <h1 className="h1services"> Cookies </h1>
        <div className="serviceText">
          This website, like many others, stores and retrieves information on
          your browser using cookies. This information is used to make the site
          work as you expect it to. It is not personally identifiable to you,
          but it can be used to give you a more personalised web experience.
          Because we respect your right to privacy, you can choose to change
          your privacy preferences to prevent non-essential cookies being set.
        </div>
        <div className="serviceTitle"> Cookies used on this site</div>
        <div className="serviceText">
          Google Analytics Web Property ID UA-103006854-1 Code Version/Syntax
          Universal Protocol version number 1
        </div>
        <div className="serviceText">csurf for admin rights only</div>
      </div>
    );
  }
}

export default translate("translations")(Cookies);
