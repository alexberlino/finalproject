import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class Security extends Component {
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
            - HTTPS and SEO - Technical SEO Freelancer | SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO: HTTPS and security and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/security"
          />
        </Helmet>{" "}
        <div className="services">
          <img
            src="/auditmainpic/security.jpg"
            title="security, a photo by Ibrahim Rifath"
            alt="security SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <h1 className="h1services"> Security - Migration to https</h1>{" "}
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            <p>
              Hyper Text Transfer Protocol Secure (HTTPS) is the secure version
              of HTTP, the protocol over which data is sent between browser and
              the connected website. The 'S' of HTTPS stands for 'Secure'. It
              means all communications between browser and website are
              encrypted.
            </p>
            <img
              className="imageservices"
              src="/icons/lock.jpg"
              width="80px"
              height="80px"
            />

            <p>
              HTTPS is often used to protect highly confidential online
              transactions like online banking and online shopping order forms.
              But has now become to norm.
            </p>
            <img
              className="imageservices"
              src="/icons/notsecure.png"
              width="100px"
              height="32px"
            />

            <p>
              Https for "early-adopters" may have given them an advantage on
              their competitors, these times are over. If you haven't made the
              transition yet, it needs to be very high on your priority list.
              Since summer 2018, Chrome now shows a "not secure" warning so
              beware of a sharp increase in bounce rate should you now have
              implemented it yet, on top of lower rankings.
            </p>
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            Plan your site migration carefully, incluing identify pages to
            redirect (which should be the most valuable ones), and those you
            should not. Timing is key to avoid risks, so avoid doing it before
            your high season.
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

export default translate("translations")(Security);
