import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import Blog from "./blog";
import LinksToPages from "./LinksToPages";

class Audit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Audit || SEO Berlino</title>
        </Helmet>
        <div>
          <div className="infoTitle"> SEO Audit </div>
          <div className="infoIntro"> {t("audit_intro")} </div>
          <div className="infoMain">{t("audit_main")}</div>
          <div className="infoMain">
            To understand where you stand, you cannot ignore competitors. What
            are they doing that you are not? Which keywords are they targeting,
            how do they perform technically and you don't? What do the offer
            that I don't? What are their prices, services etc? How do they get
            their links and domain authority? But most importantly where do I
            stand to get better than them? ​ Either way, competition and your
            company are the options that I offered to your target customers and
            you need to know where you stand when setting up an SEO Strategy.
          </div>
        </div>
        <div>
          <LinksToPages />
        </div>
      </div>
    );
  }
}

export default translate("translations")(Audit);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
