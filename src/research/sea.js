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
          <title>Reseach & Analytics - ppc Google Ads | SEO Berlino</title>
          <meta
            name="description"
            content="Paid Search Services with SEO Berlino."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/sea"
          />{" "}
        </Helmet>

        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
        </div>
        <h1 className="h1services"> SEA, Search Engine Advertising</h1>
        <h2 className="serviceTitle">
          {" "}
          What is SEA? And what SEO and SEA have in common ?{" "}
        </h2>
        <div className="serviceText">
          Paid Search uses the same base as SEO in keywords, and of course share
          the same space in SERPs (Search Engine Result Pages). With poor SEO
          visibility, SEA helps you to get those first visits to get going
          and/or get visibility and brand awareness using the Display Network.
        </div>
        <h2 className="serviceTitle"> Adwords Set-up</h2>
        <div className="serviceText">
          Adwords Set-up and/or optimization, landing pages testing. Keywords
          bid ajustments depending on the strategy.
        </div>

        <h2 className="serviceTitle"> Adwords Account Optimization</h2>
        <div className="serviceText" />

        <h2 className="serviceTitle"> Landing Page Optimization</h2>
        <div className="serviceText" />

        <h2 className="serviceTitle"> SEO / SEA Consistency </h2>
        <div className="serviceText" />

        <h2 className="serviceTitle"> Google Ads Data for SEO </h2>
        <div className="serviceText" />
        <h2 className="serviceTitle"> Releted Tools and Resources</h2>
        <div className="serviceText">
          <footer>Adwords </footer>
        </div>
      </div>
    );
  }
}

export default translate("translations")(SEA);
