import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class DuplicateContent extends Component {
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
          <title>Duplicate Content - Onpage SEO Freelancer | SEO Berlino</title>
          <meta
            name="description"
            content="Duplicate Content and Semantics for SEO."
          />{" "}
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/duplicatecontent"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/duplicate.jpg"
            title="duplication, a photo by rawpixel"
            alt="duplicate content SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services">
            {" "}
            On-page SEO: Duplicate Content and Canonicals
          </h1>
          <div className="serviceTitle">
            {" "}
            Duplicate Content, the biggest threat to making content king
          </div>
          <div className="serviceText">
            Search Engines do not like duplicate content indexed. If you have
            many similar pages and you are not flagging them, these pages will
            not rank well.
          </div>
          <img src="/content.svg" className="serviceImage" />

          <div className="serviceTitle"> Indexation audit</div>
          <div className="serviceText">
            Identify duplicate content, assess status and design for the master
            page, deindex unnecessary pages using canonicals, 410s or redirects
            accordingly.
          </div>
          <div className="serviceText">
            Duplicate content can either be confusing for users (and indeed
            search engine algorithms); it can also be used to try to manipulate
            search rankings or win more traffic. As a result, search engines
            aren’t keen on it, and Google and Bing advise webmasters to fix any
            duplicate content issues they find. You can fix duplicate content
            issues by: Preventing your CMS publishing multiple versions of a
            page or post (for example, by disabling Session IDs where they are
            not vital to the functionality of your website and getting rid of
            printer-friendly versions of your content). Using the canonical link
            element to let search engines know where the ‘main’ version of your
            content resides.
          </div>
          <div className="serviceTitle"> Using Canonicals</div>
          <div className="serviceText">
            Canonicals are best used when you have very similar pages fro
            imstance same t-shirt in different colours. You don't want to index
            the same t-shirt for each colour, although you want to keep the urls
            for the user to browse through the options. Beware though that
            sometimes canonicals are sometimes ignored by Google so it is
            important to monitor the results of canonicals implementation and
            follow up with a new strategy if necessary.
          </div>

          <div className="serviceTitle">
            {" "}
            Same language country, different territory target
          </div>
          <div className="serviceText">
            A possible cause for duplicate content is when targeting different
            territoris (UK and US for instance) with different domains or urls
            but with a very similar content. Make sure then that you have well
            implemented href lang!
          </div>
          <div className="black slide-in-left sideLinks">
            <a className="block" href="/en/onpage/keywordresearch">
              {t("onpageHP1")}
            </a>
            <a className="block" href="/en/onpage/landingpages">
              {t("onpageHP2")}
            </a>
            <a className="block" href="/en/onpage/internallinking">
              {t("onpageHP3")} {t("onpageHP5")}
            </a>{" "}
            <a className="block" href="/en/onpage/metas">
              {t("onpageHP4")}
            </a>
            <a className="block" href="/en/technical/mobilefriendly">
              <a className="block" href="/en/onpage/content">
                {t("onpageHP6")}
              </a>
            </a>
            <a className="block" href="/en/onpage/images">
              {t("onpageHP7")}
            </a>
            <a className="block" href="/en/onpage/structureddata">
              {t("onpageHP8")}
            </a>{" "}
            <a className="block" href="/en/onpage/duplicatecontent">
              {t("onpageHP9")}
            </a>
            <a className="block" href="/en/onpage/voicesearch">
              {t("onpageHP10")}
            </a>
          </div>
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(DuplicateContent);
