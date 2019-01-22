import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class LocalSEO extends Component {
  render() {
    const { t, i18n } = this.props;
    

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Local SEO | SEO Berlino</title>
          <meta
            name="description"
            content="Local SEO : make sure that SEO is well optimized for your area"
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/research/localseo"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/local.jpg"
          title="local, a photo by Brandi Ibrao"
          alt="local SEO"
          className="imageAudit"
        />
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>
          <h1 className="h1services"> Local SEO</h1> <br />
          <div className="serviceText">
            Especially for local business, it is paramount to align your SEO
            overall strategy to local SEO. It is important to keep in mind that
            the most important factor in personalised search results is
            location.
          </div>{" "}
          <br />
          <div className="serviceText">
            In the audit which is affected by both on-page an off-page, local
            SEO factors such as city/ region mention will be taken in account.
          </div>{" "}
          <br />
          <div className="serviceText">
            If you have a local business, like a shop, or have people visiting
            your office frequently, optimizing your website is also about making
            sure people are able to find you in real life. But even if your not
            actively getting visitors in your building, but are targeting an
            audience that is located in the same geographical area as you are,
            you need to optimize for that area. Ground-rule these days is that
            it’s by far the easiest to optimize if you have a proper address in
            a region/city. The thing is that if you want to optimize for, for
            instance, a service area that you are not located in physically,
            your main tool for optimization is content. You should simply write
            a lot about that area. We found that often, this leads to forced
            pages that have little to do with the business at hand.
          </div>{" "}
          <br />
          <div className="serviceText">
            Local SEO isn’t just about search engines. Yes, there is a lot you
            can do online to optimize your website for a local audience. But if
            you are running a local business, things like word-of-mouth and a
            print brochure also contribute to local SEO. If you mention your
            website and social profiles on your offline communication/promotion
            as well, your Facebook likes might go up, your Twitter followers
            could increase, and the direct traffic on your website will get
            higher. One way or another, this will be visible to Google as well,
            beit indirect perhaps.
          </div>{" "}
          <br />
          <div className="serviceTitle"> Relevant Tools and Resources</div>
          <div className="serviceText">
            <footer>Google's MyBusiness</footer>
          </div>
          <div className="black slide-in-left sideLinks">
            <a className="block bold">{t("analyticsHP1")}</a>
            <a
              className="block"
              href={"/" + this.props.lng + "/research/analytics"}
            >
              {t("analyticsHP2")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/research/bestpractices"}
            >
              {t("analyticsHP3")}
            </a>
            <a className="block" href={"/" + this.props.lng + "/research/sea"}>
              {t("analyticsHP6")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(LocalSEO);
