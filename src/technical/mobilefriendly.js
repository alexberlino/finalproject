import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class MobileFriendly extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Mobile First - Mobile friendly - Technical SEO Freelancer | SEO
            Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO: mobile friendly and why its important in SEO "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/mobilefriendly"}
          />
        </Helmet>{" "}
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <img
            src="/auditmainpic/mobilefriendly.jpg"
            title="mobile phone, a photo by Rodion Kutsaev"
            alt="mobile friendly"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <h1 className="h1services">
            {" "}
            Mobile First - Mobile friendly websites
          </h1>{" "}
          <div className="serviceTitle"> Why it's (extremely) Important</div>
          <div className="serviceText">
            <p>
              If your website it not mobile friendly, in most cases, you are in
              trouble. Google now uses the mobile version for indexation so
              called mobile first. If you are not sure, you can use Google's
              tool below.
            </p>
            <img
              src="/icons/mobilefirst.png"
              className="imageservices"
              title="mobile-first"
              alt="mobile-first"
              width="100px"
              height="100px"
            />
            <p>
              A ‘responsive’ website design adjusts itself automatically so that
              it can be navigated and read easily on any device. Google is clear
              about the fact that having a responsive site is considered a very
              significant ranking signal by its algorithms. And, with the
              introduction of Google’s ‘mobile first’ approach to indexing
              content, a responsive website is now more important than ever. So
              it makes sense to ensure that your website is fully responsive and
              will display in the best format possible for mobile, tablet or
              desktop users.{" "}
            </p>
            <p>
              With mobile-first indexing, Googlebot primarily crawls and indexes
              pages with the smartphone agent. However Google will continue to
              show the device URL that is the most appropriate to users in
              Search results.
            </p>

            <p>
              This means that you for instance text showing on the desktop
              version but not on the mobile one may very likely be ignored for
              indexation and page relavancy. If there is too much text for the
              mobile version use 'show more'.
            </p>

            <p>
              In terms of performance, you need to make sure that your mobile
              version loads fast and in the right format. You can use Google's
              PageSpeed Developer Tool
            </p>
          </div>
          <div className="serviceTitle"> Tools and Resources</div>
          <div className="serviceText">
            <footer>
              <a
                target="_blank"
                href="https://search.google.com/test/mobile-friendly"
              >
                Google's Mobile Friendly Test
              </a>{" "}
            </footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/indexation"}
            >
              {t("technicalHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/crawlability"}
            >
              {t("technicalHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/internationalisation"}
            >
              {t("technicalHP3")}
            </a>{" "}
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/pagespeed"}
            >
              {t("technicalHP4")}
            </a>
            <a className="block bold">{t("technicalHP5")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/dynamicrendering"}
            >
              {t("technicalHP6")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/security"}
            >
              {t("technicalHP7")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}
export default translate("translations")(MobileFriendly);
