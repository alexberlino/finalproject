import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class Crawlability extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO Freelancer - Crawlability | SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO: crawlability and why its important in SEO "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical/crawlability"
          />
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <a href={"/en"}>> SEO FREELANCER ></a>

            <a href={"/en/resources"}> AUDIT ></a>

            <a href={"/en/technical"}> TECHNICAL </a>
          </div>

          <h1 className="h1services">
            {" "}
            Technical SEO Freelancer - Crawlability
          </h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Crawlibility goes hand in hand with indexation. In order to adjust
            and optimize indexation, you can improve and guide Google on how it
            crawls your site.
          </div>
          <img
            src="/icons/crawler.png"
            className="imageservices"
            alt="web crawler"
            width="100px"
            height="100px"
          />
          <div className="serviceTitle"> Sitemap(s)</div>
          <div className="serviceText">
            xml format sitemap guide Google on how to crawl your site. Although
            Google says there is no guaranty the Google bot will follow your
            instructions, it is still highly recommended and in most cases,
            sitemaps are beneficial.
          </div>

          <div className="serviceTitle"> Robots</div>
          <div className="serviceText">
            Robots set instructions depending on the user agent which parts of
            the site can be accessed. Making sure you are not excluding the
            relevant search engine bots is therefore of course paramount.
          </div>

          <div className="serviceTitle"> metas</div>
          <div className="serviceText">
            You can also guide the Google bot in the code with tags for each
            page the most common ones being: "follow/noFollow" and
            "index/noindex"
          </div>

          <div className="serviceTitle"> Search Console</div>
          <div className="serviceText">
            You can directly submit urls to the Google index in the Google
            Search Console. This is particularly useful if you have crawling
            issues and there are some pages you want to have crawl and indexed
            in priority.
          </div>

          <div className="serviceTitle"> Indexation Google Crawl Credit</div>
          <div className="serviceText">
            An important factor which links crawalability and indexation is that
            for sites with many pages (indexed or not), there is a limit to how
            much your site will be crawled each time the Google bot visits your
            site. It is therefore important to keep an eye and understand which
            pages are indexed and why they need to be indexed (not all pages
            need to be indexed in particular in case of duplicate content)
          </div>
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(Crawlability);
