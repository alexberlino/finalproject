import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class Metas extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Onpage SEO Freelancer - Meta optimization | SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/metas"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/tag.jpg"
            title="tags, a photo by rawpixel"
            alt="meta tags SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services"> On-page SEO: Metas Tags and headers </h1>
          <div className="serviceTitle"> titles</div>
          <div className="serviceText">
            Page titles are often neglected, but are really important and very
            simple to implement. That means you need to have them spot on. Each
            page should have unique titles, clearly stating the page main focus,
            using terms that users are searching, so according to your keywords
            list.
          </div>
          <div className="serviceTitle"> description</div>
          <div className="serviceText">
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

          <div className="serviceTitle"> headers</div>
          <div className="serviceText">
            you should have one h1 per page with h1 being your main keyword for
            the page. then
          </div>

          <div className="serviceTitle"> what to check</div>
          <div className="serviceText">
            Crawling through the website to analyse and identify:
            <ul>
              <li>missing or empty metas</li>
              <li>duplicate or unclear metas</li>
              <li>too long or too short metas</li>
            </ul>
          </div>
          <div className="serviceTitle"> Tools and Resources</div>
          <div className="serviceText">
            <footer>Screaming Frog </footer>
          </div>
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(Metas);
