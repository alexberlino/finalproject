import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class Toxic extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Toxic Links Cleaning - Offpage SEO Freelancer | SEO Berlino
          </title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/offpage/toxic"
          />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/toxic.jpg"
            title="toxic, a photo by Scott Rodgerson"
            alt="backlinking"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <h1 className="h1services">
            {" "}
            Cleaning Toxic Links - Backlinks Audit{" "}
          </h1>
          <div className="serviceTitle"> Quality of quantity</div>
          <div className="serviceText">
            Many think the more links, the better but it doesn't actually work
            that way. Too many low quality and/or spammy links and your website
            will lose "Google credibility" and therefore visibility.
          </div>
          <div className="serviceTitle">
            {" "}
            You are responsible for the links that point to you
          </div>
          <div className="serviceText">
            Since a few years already, you as website owner are responsible for
            the backlinks pointing to your site, so you need to constantly
            monitor, identify bad links and clean up your backlink profile.
            First step using the disavow tool then to try pro-actively to remove
            them.
          </div>

          <div className="serviceTitle"> Too many links from one domain</div>
          <div className="serviceText">
            Getting a backlink that appears on every page of a site is rarely a
            good idea especially if it not set as nofollow. First the position
            of the link on the page is a key factor so if your link is in the
            footer its positioning is all but optimal. Second, your numerous
            backlinks will in fact count as only one and its value will be
            minimal if negative.
          </div>

          <div className="serviceTitle"> Other type of links to avoid</div>
          <div className="serviceText">
            <ul>
              <li>links from unrelated websites</li>
              <li>
                links from sites of different languages and/or countries links
              </li>
              <li> from websites flagged as spammy</li>
            </ul>
          </div>
          <img
            src="/disavow.png"
            className="traffic"
            width="300px"
            height="150px"
          />

          <div className="serviceTitle">
            {" "}
            Disavow and contact them to remove them
          </div>
          <div className="serviceText">
            Once you have identified those toxic links, the best is first to use
            the{" "}
            <a
              href="https://www.google.com/webmasters/tools/disavow-links-main"
              target="blank"
            >
              Google disavow tool
            </a>{" "}
            to inform Google you are aware of them and want to bring them to
            Google's attention. Please note that you need to be connected to the
            website's search console acccount in order to log into the tool.
            Google then advises you to actively get in touch with the respective
            webmasters and ask them to remove them.
          </div>
          <div className="sideLinks black slide-in-left">
            <a className="block" href="/en/offpage/backlinkanalysis">
              {t("offpageHP1")}, {t("offpageHP2")}
            </a>
            <a className="block" href="/en/offpage/brandbuilding">
              {t("offpageHP3")}, {t("offpageHP4")}
            </a>{" "}
            <a className="block" href="/en/offpage/toxic">
              {t("offpageHP5")}
            </a>
          </div>
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(Toxic);
