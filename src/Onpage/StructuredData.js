import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class StructuredData extends Component {
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
          <title>Structured Data - Onpage SEO Freelancer | SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/structureddata"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/structured.jpg"
            title="data, a photo by Markus Spiske"
            alt="structured data"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services"> On-page SEO: Structured Data </h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Google, Bing, Yandex and Yahoo agreed on a standardised format:
            schema.org for providing information about a page and to classify
            its content. using Structured Data will enable you to improve the
            way your pages are displayed. Structured Data Additionally,
            structured data enhances search results through the addition of
            ‘rich snippets’ - for example, you can use structured data to add
            star ratings to reviews; prices to products; or reviewer
            information(example below). Because they are more visually appealing
            and highlight immediately useful information to searchers, these
            enhanced results can improve your click-through rate (CTR), and
            generate additional traffic to your site. Because sites with results
            featuring higher CTRs are generally considered to receive
            preferential treatment in search engines, it is worth making the
            effort to add structured data to your site.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            You can use Structured Data to provide additional information about
            creative work, events, organisation, a person, a place or a product.
            Here is a list of the most common used of Structured Data: *
            Organization information * Local business Markup * Product and Offer
            * Breadcrumb * Ratings * Site navigation
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
        </div>
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(StructuredData);
