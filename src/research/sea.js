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
          <title>SEA - pay-per-click Google Ads | SEO Berlino</title>
          <meta
            name="description"
            content="Paid Search Services - Synchronize your SEA activities with your SEO Strategy. SEO Berlino."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/sea"
          />{" "}
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> {t("services")} </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>
          <img
            src="/auditmainpic/advertising.jpg"
            title="advertising, a photo by Denys Nevozhai"
            alt="SEA"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <h1 className="h1services"> SEA, Search Engine Advertising</h1>
          <h2 className="serviceTitle">
            {" "}
            What is SEA? And what SEO and SEA have in common ?{" "}
          </h2>
          <div className="serviceText">
            Paid Search uses the same base as SEO in keywords, and of course
            share the same space in SERPs (Search Engine Result Pages). With
            poor SEO visibility, SEA helps you to get those first visits to get
            going and/or get visibility and brand awareness using the Display
            Network.
          </div>
          <h2 className="serviceTitle"> Adwords Set-up</h2>
          <div className="serviceText">
            Google Ads is not extremely competitive which means CPC (cost per
            click) are very high for pretty much any industry. Doing a thorough
            Keyword Research is key before starting a campaign. It is also
            important to think budget and choose your strategy: visibility, ROI,
            etc. Adwords Set-up
          </div>
          <h2 className="serviceTitle"> Adwords Account Optimization</h2>
          <div className="serviceText">
            Once you have chosen your budget strategy, created your campaigns,
            adgroups and ads, optimization begins:
            <ul>
              <li>Keywords bid ajustments</li>
              <li>landing pages testing, CVR here is good indicator</li>
              <li>ads testing</li>{" "}
              <li>work on that Quality Score to optimize your bids</li>
              <li>
                ad & remove keywords, vary match accordingly (main matches are
                exact, phrase, broad)
              </li>
              <li>negative list adding</li>
              <li>display network adjustments</li>
            </ul>
          </div>
          <h2 className="serviceTitle"> SEO / SEA Consistency </h2>
          <div className="serviceText">
            A great way to transmit a stronger message on SERPs is to be
            consistent in your language and word choice in SEO and SEA.
            <ul>
              <li>
                consitent form of address for non-english languages such as
                German, French, Italian, etc
              </li>
              <li>
                same wording and style in Ads and meta descriptions so that the
                user has more chances to recognise your brand.
              </li>
            </ul>
          </div>
          <h2 className="serviceTitle"> Google Ads Data for SEO </h2>
          <div className="serviceText">
            Google Ads are expensive but on top of getting you that visibility
            and orders, it is a precious goldmine for keywords, especially if
            the account is well managed (with impressions, meaning high enough
            bids)
          </div>
          <h2 className="serviceTitle"> Releted Tools and Resources</h2>
          <div className="serviceText">
            <footer>Google Ads </footer>
          </div>{" "}
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/research/localseo"}
            >
              {t("analyticsHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/research/analytics"}
            >
              {t("analyticsHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/research/bestpractices"}
            >
              {t("analyticsHP3")}
            </a>
            <a className="block" href={"/" + this.props.lng + "/research/sea"}>
              {t("analyticsHP6")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(SEA);
