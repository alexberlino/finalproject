import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Metas extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {" "}
            {t("")}
            Meta optimization - Onpage SEO Freelancer -Onpage SEO Freelancer |
            SEO Berlino
          </title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/metas"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/tag.jpg"
          title="tags, a photo by rawpixel"
          alt="meta tags SEO"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services"> MetasTags & Headings </h1>
          <h2> titles{t("")}</h2>
          <div className="serviceText">
            {t("")}
            Page titles are often neglected, but are really important and very
            simple to implement. That means you need to have them spot on. Each
            page should have unique titles, clearly stating the page main focus,
            using terms that users are searching, so according to your keywords
            list.
          </div>
          <h2> description</h2>
          <div className="serviceText">
            {t("")}
            Meta descriptions are not required t have your page rank well. Even
            if your meta description is empty or missing, Google will take some
            text from the page and fill in the gap. If you have one but Google
            is not using it, that means Google did not find it relevant enough
            for the searched term. Either way, meta descriptions are important
            for CTR, searched terms if included in your description will appear
            in bold and you can also confirm to the user your entry is the most
            relevant for the search and add that difference that will make the
            click happen.
          </div>

          <h2> headings</h2>
          <div className="serviceText">
            {t("")}
            you should have one h1 per page with h1 being your main keyword for
            the page. then
          </div>

          <h2> {t("")}what to check</h2>
          <div className="serviceText">
            {t("")}
            Crawling through the website to analyse and identify:
            <ul>
              <li>missing or empty metas</li>
              <li>duplicate or unclear metas</li>
              <li>too long or too short metas</li>
            </ul>
          </div>
          <h2> {t("")}s</h2>
          <div className="serviceText">
            <footer>Screaming Frog </footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/keywordresearch"}
            >
              {t("onpageHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/landingpages"}
            >
              {t("onpageHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/internallinking"}
            >
              {t("onpageHP3")} {t("onpageHP5")}
            </a>{" "}
            <a className="block bold">{t("onpageHP4")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/content"}
            >
              {t("onpageHP6")}
            </a>
            <a className="block" href={"/" + this.props.lng + "/onpage/images"}>
              {t("onpageHP7")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/structureddata"}
            >
              {t("onpageHP8")}
            </a>{" "}
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/duplicatecontent"}
            >
              {t("onpageHP9")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/onpage/voicesearch"}
            >
              {t("onpageHP10")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Metas);
