import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class BacklinkAnalysis extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Backlink Profile Audit - Offpage SEO | SEO Berlino</title>
          <meta
            type="description"
            content="Backlinks still play a huge part in SEO. Understanding your profile and setting goals for quality links is key to success."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/offpage/backlinkanalysis"
          />{" "}
        </Helmet>

        <div className="services">
          <img
            src="/auditmainpic/linkmain.jpg"
            title="Links, a photo by JJ Ying"
            alt="backlinking"
            width="90%"
            height="440px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <h1 className="h1services"> Backlink Profile Audit</h1>
          <div>
            <div className="serviceText">
              <p>
                Create a report with your profile's pros and cons. Audit
                competitors to understand where you stand. Brainstorm link
                targets and content production, and then prioritise depending on
                potential and coplexity. Set targets: quantity and quality links
                for the next quarters focusing on{" "}
                <a href="/en/offpage/brandbuilding">brand building</a>.
              </p>
            </div>
            <img
              src="/offpage.svg"
              className="bigicon"
              heigth="200px"
              width="200px"
            />
            <h2 className="serviceTitle">
              Fact: Backlinks are still very important in 2019
            </h2>
            <div className="serviceText">
              Like it was the case 20 years ago, backlinks are key to SEO
              success and still define the reputation and popularity of your
              brand on the web. However, backlinks do not work like 20 years
              ago, and far from it. It is now much more about quality of the
              links and relevancy. It is crucial to understand where you stand,
              plan, execute and control your backlink activities.
            </div>
            <h2 className="serviceTitle">Quality over quantity</h2>
            <img
              src="/qualityoverquantity.jpeg"
              className="bigicon"
              heigth="200px"
              width="200px"
            />
            <div className="serviceText">
              Getting many backlinks from any website, paying links off from
              unrelated websites, or websites operating from a different country
              or with a different language are some example of wasted efforts.
              Most importantly, if the website which is linking to you has a
              poor reputation itself its value will be only minimum; worse if it
              is considered a spammy website, the link might even lower your
              website's reputation.
            </div>
            <h2 className="serviceTitle">
              Refering Domains: page authority over domain authority
            </h2>
            <div className="serviceText">
              Getting a link from a reputable and relevant (to your industry)
              website is a great achievement. However keep in mind the actual
              page the link is appearing on is the real deal. If the page itself
              has little exposure, little number of internal links and/or
              traffic, its impact will not be as positive as if it was on the
              homepage for example. On the contrary, if it appears in every page
              of the site, this might seen as spammy backlinking so avoid that
              extreme as well.
            </div>
            <h2 className="serviceTitle">
              Compare your backlink profile to those of your main competitors -
              to keep a benchmark in mind.
            </h2>
            <div className="serviceText">
              It is very important and useful to look at your successful
              competitors to analyse:
              <ul>
                <li>how they get their (high quality) links</li>
                <li>
                  the domain authority and quality of their backlink profile
                </li>
                <li>
                  ratio follow/nofollow, anchor text, ratio quality links,
                  number & quality of referring domains
                </li>
              </ul>
            </div>
            <h2 className="serviceTitle">Anchor text</h2>
            <div className="serviceText">
              make sure they look natural, avoid "click here" or some misleading
              text. Very often the brand name is the most used anchor text.
            </div>
            <h2 className="serviceTitle">nofollow/follow links</h2>
            <div className="serviceText">
              Make sure the ratio of nofollow links is not too high. nofollow
              means that the website linking does not want to "commit" the link
              as sign a trust and therefore pass link juice (authority). It is
              totally acceptable to have a certain percentage of nofollow links
              but if this ration gets to high, this is sign that your website is
              not trusted.{" "}
            </div>
            <h2 className="serviceTitle">gov & edu links</h2>
            <div className="serviceText">
              ".gov" and ".edu" sites have by essence a lot more trust and power
              as ".com" for instance. If you have the opportunity to get alink
              from such sites and it makes sense to your business - bringing in
              at the same time quality & relevant traffic - this link will very
              likely be beneficial.
            </div>
            <h2 className="serviceTitle"> Related Tools and Resources</h2>
            <div className="serviceText">
              <a
                target="blank"
                className="block"
                href="https://moz.com/link-explorer"
              >
                Moz Link Explorer
              </a>{" "}
              <a
                target="blank"
                className="block"
                href="https://de.majestic.com/"
              >
                Majestic SEO
              </a>
              <a target="blank" className="block" href="https://ahrefs.com/de/">
                ahrefs
              </a>
            </div>
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
        </div>
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(BacklinkAnalysis);
