import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BestPractices extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Best Practices when launching a new website || SEO Berlino
          </title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>

        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
        </div>
        <h2 className="h1services"> Best Practices for new Websites</h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Planning ahead the SEO strategy before building the website helps to
          avoid re-doing parts of the website which could be SEO-unfriendly,
          thus saving you time and euros.
        </div>
        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          {" "}
          Assitance in your technical planning, understanding priorities,
          retrictions and objectives and make sure it fits SEO-friendliness,
          help you plan ahead a brandbuilding (link acquisition) strategy.
        </div>
      </div>
    );
  }
}

export default translate("translations")(BestPractices);
