import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class PageSpeed extends Component {
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
          <title>
            {" "}
            Page Speed SEO - Technical SEO Freelancer | SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO: page speed and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/pagespeed"
          />
        </Helmet>{" "}
        <div className="services">
          <img
            src="/auditmainpic/pagespeed.jpg"
            title="pagespeed, a photo by Twixes"
            alt="pagespeed"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h1 className="h1services"> Page Speed</h1>{" "}
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            If your pages are slow to load, Google will figure it out and will
            categorize your website as poor user experience, therefore suffering
            in terms of organic visibility. If you haven't done it yet, I
            strongly advise you to use the PageSpeed Insights tool (link below){" "}
          </div>
          <img
            src="/icons/speed.png"
            className="imageservices"
            alt="speed icon"
            width="100px"
            height="100px"
          />
          <div className="serviceTitle"> Tools and Resources</div>
          <div className="serviceText">
            <footer>
              <a href="https://developers.google.com/speed/pagespeed/insights/?hl=de">
                Google PageSpeed Insights
              </a>{" "}
              <div className="block"> Lighthouse</div>
              <p>
                Please note that Lighthouse belongs to Google and their advice
                is (a bit too) specific to Google Chrome, so for instance it
                will advise you to use new image formats which may not be usable
                and rendered on other browser such as Firefox or Safari.
              </p>
            </footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a className="block" href="/en/technical/indexation">
              {t("technicalHP1")}
            </a>
            <a className="block" href="/en/technical/crawlability">
              {t("technicalHP2")}
            </a>
            <a className="block" href="/en/technical/internationalisation">
              {t("technicalHP3")}
            </a>{" "}
            <a className="block" href="/en/technical/pagespeed">
              {t("technicalHP4")}
            </a>
            <a className="block" href="/en/technical/mobilefriendly">
              {t("technicalHP5")}
            </a>
            <a className="block" href="/en/technical/dynamicrendering">
              {t("technicalHP6")}
            </a>
            <a className="block" href="/en/technical/security">
              {t("technicalHP7")}
            </a>
          </div>
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(PageSpeed);
