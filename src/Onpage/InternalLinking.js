import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class InternalLinking extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Internal Linking - Onpage SEO Freelancer| SEO Berlino</title>
          <meta type="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/internallinking"
          />{" "}
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> {t("services")} </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>
          <img
            src="/auditmainpic/internal.jpg"
            title="arrow, a photo by Scott Rodgerson"
            alt="internal linking SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <h1 className="h1services">Internal Linking </h1>
          <div className="serviceTitle"> Why it's (extermely) Important</div>
          <div className="serviceText">
            Internal Linking is core for on-page SEO, especially for big
            websites. Link juice redistribution, prioritization of key pages or
            site sections to name a few reasons. Google crawls websites by
            following links, internal and external, using a bot called Google
            bot. This bot arrives at the homepage of a website, starts to render
            the page and follows the first link. By following links Google can
            work out the relationship between the various pages, posts and other
            content. This way Google finds out which pages on your site cover
            similar subject matter.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            Review and audit your current internal linking settings, including
            navigation, sub-navigations, breadcrumb and tags, taking into
            account business prioritization. Report action plan with main
            priority points and explanations for each points.
          </div>
          <div className="serviceText">
            In addition to understanding the relationship between content,
            Google divides link value between all links on a web page. Often,
            the homepage of a website has the greatest link value because it has
            the most backlinks. That link value will be shared between all the
            links found on that homepage. The link value passed to the following
            page will be divided between the links on that page, and so on.
            Therefore, your newest blog posts will get more link value if you
            link to them from the homepage, instead of only on the category
            page. And Google will find new posts quicker if they’re linked to
            from the homepage. When you get the concept that links pass their
            link value on, you’ll understand that more links to a post mean more
            value. Because Google deems a page that gets lots of valuable links
            as more important, you’ll increase the chance of that page ranking.{" "}
          </div>
          <div className="serviceText">
            It’s crucial for your SEO to evaluate and improve internal linking
            strategy on a regular basis. By adding the right internal links you
            make sure Google understands the relevance of pages, the
            relationship between pages and the value of pages. The ideal
            structure We always advise website owners to imagine their website
            to be a pyramid with the most important content on top. We call
            those articles cornerstone content. There should be lots of links to
            that most essential content from topically-related pages in the
            pyramid, which passes most link value on to those pages. However,
            you should also link from those top pages to subpages about related
            topics. Linking internally to related content shows Google what
            pages hold information about similar topics.{" "}
          </div>
          <div className="serviceText">
            Don’t forget to link from the top too Besides linking from
            topically-related posts and pages, it’s possible to make your
            cornerstone content more authoritative by adding links to it from
            the homepage or the top navigation. This will give the most
            important posts or pages a lot of link value and makes them stronger
            in Google’s eyes. Linking to taxonomies If you run a blog it could
            be beneficial to add internal links to the taxonomies the post
            belongs to. Adding links to the category and tags helps Google to
            understand the structure of your blog and helps visitors to more
            easily navigate to related posts. At Yoast we always link to the
            matching categories and tags in the sidebar of each post:
          </div>{" "}
          <div className="serviceTitle"> Some relevant tools</div>
          <div className="serviceText">Screaming Frog</div>
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
            <a className="block" href={"/" + this.props.lng + "/onpage/metas"}>
              {t("onpageHP4")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/mobilefriendly"}
            >
              <a
                className="block"
                href={"/" + this.props.lng + "/onpage/content"}
              >
                {t("onpageHP6")}
              </a>
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
        </div>
      </div>
    );
  }
}

export default translate("translations")(InternalLinking);
