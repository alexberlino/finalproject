import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class Analytics extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Analysis for SEO - Reseach & Analytics | SEO Berlino</title>
          <meta
            type="description"
            content="Analytics for SEO. Without Data, it is difficult
              to make the right decisions. Analytics, Search Console, SiteCatalyst."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/analytics"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/analytics.jpg"
            title="analytics, a photo by Carlos Muza"
            alt="analytics SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER ></a>

            <a href={"/en/resources"}> AUDIT ></a>

            <a href={"/en/research"}> RESEARCH </a>
          </div>
          <h1 className="h1services"> Analytics SEO</h1>
          <h2 className="serviceTitle">
            {" "}
            Reliable data to make confident decisions
          </h2>
          <div className="serviceText">
            In order to efficiently work in SEO, especially for on-page work, it
            is crucial to use *reliable data*, and analytics is key here in
            compiling reports which will enable for instance to identify the
            number of visits/unique visitors and conversions for specific pages
            and site sections, or compare data by device type or browser.
          </div>
          <h2 className="serviceTitle"> Google Analytics</h2>
          <div className="serviceText">
            Google offers a free version for an analytics tool: Google
            Analytics. Its set-up is quite straight-forward but you will still
            needs
          </div>

          <h2 className="serviceTitle"> Google Analytics First steps</h2>
          <div className="serviceText">
            <ul>
              <li>
                Activation in code (head) for each page you want to track.
              </li>
              <li>
                Create Accounts / Views for each account: All Data, Test, Master
              </li>
              <li>
                Create Filters: exclude all bots traffic and internal traffic
              </li>
              <li>Create Reports and Dashboards</li>
              <li>Correctly setup UTM for your marketing campaigns</li>
              <li>
                Optimize continuously, analysing reports and acting accordingly
                (new reports, new filters, etc){" "}
              </li>
            </ul>
          </div>

          <h2 className="serviceTitle"> Google Search Console Integration</h2>
          <div className="serviceText">
            To get more valuable insight especially in terms of keywords, it is
            better to integrate Google Search Console to Google Analytics. GA
            itself does not show any keywords; they appear as "not provided".
          </div>

          <div className="serviceTitle"> Relevant Tools and Resources</div>
          <div className="serviceText">
            <footer>Google Analytics </footer>
            <footer>Google Search Console</footer>

            <footer>Site Catalyst / Omniture</footer>
            <footer>GA Guide</footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a className="block" href="/en/research/localseo">
              {t("analyticsHP1")}
            </a>
            <a className="block" href="/en/research/analytics">
              {t("analyticsHP2")}
            </a>
            <a className="block" href="/en/research/bestpractices">
              {t("analyticsHP3")}
            </a>
            <a className="block" href="/en/research/sea">
              {t("analyticsHP6")}
            </a>
          </div>
        </div>
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(Analytics);
