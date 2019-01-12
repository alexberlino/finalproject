import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class Images extends Component {
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
          <title>
            Image Optimization - Onpage SEO Freelancer | SEO Berlino
          </title>
          <meta
            name="description"
            content="Get your images indexed and ranked with efficient optimization,
            in particular alt attribute, title tag, image size and file name"
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/images"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/images.jpg"
            title="images, a photo by Soragrit Wongsa"
            alt="image optimization SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <h1 className="h1services"> On-page SEO: Images Optimization </h1>
          <h2 className="serviceTitle"> Why it's Important</h2>
          <div className="serviceText">
            Image Search still represents for most industry an important SEO
            subchannel. Given how Image search now works, many Image "visits"
            are only virtual and therefore invisible in analytics reports. Image
            Search is still a fantastic opportunity to improve brand awareness.
          </div>
          <img src="/picture.svg" height="200px" className="serviceImage" />

          <div className="serviceText">
            Make sure images are well optimized from image hosting to image alt
            tags. In case, your website actively uses images, help you with a
            strategy to improve brand awareness.
            <h2 className="serviceTitle"> alt attribute</h2>
            The alt attribute often called "alt tag" gives important information
            to the Google bot regarding what the piture is about. If the image
            path is incorrect, the alt (alternative) attribute will show
            instead.
            <h2 className="serviceTitle"> image title</h2>
            The title appears as tooltip when there is a mouse-over above the
            image. Use it to give more information about the picture. Although
            not as important for SEO as the alt attribute, it should not be
            neglected. Avoid copy and pasting the same text you have as alt
            attribute.
            <h2 className="serviceTitle"> image size and format</h2>
            If your image is too big, this will affect pagespeed, especially for
            mobile traffic.
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
export default translate("translations")(Images);
