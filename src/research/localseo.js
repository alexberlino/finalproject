import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "../LinksToPages";

class LocalSEO extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main2">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reseach & Analytics - Local SEO | SEO Berlino</title>
          <meta
            name="description"
            content="Local SEO : make sure that SEO is well optimized for your area"
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/research/localseo"
          />{" "}
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/local.jpg"
            title="local, a photo by Brandi Ibrao"
            alt="local SEO"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/research"}> RESEARCH </a>
          </div>
          <h1 className="h1services"> Local SEO</h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Especially for local business, it is paramount to align your SEO
            overall strategy to local SEO. It is important to keep in mind that
            the most important factor in personalised search results is
            location.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            In the audit which is affected by both on-page an off-page, local
            SEO factors such as city/ region mention will be taken in account.
          </div>
          <div className="serviceTitle"> Relevant Tools and Resources</div>
          <div className="serviceText">
            <footer>Google's MyBusiness</footer>
          </div>
          <div>
            If you have a local business, like a shop, or have people visiting
            your office frequently, optimizing your website is also about making
            sure people are able to find you in real life. But even if your not
            actively getting visitors in your building, but are targeting an
            audience that is located in the same geographical area as you are,
            you need to optimize for that area. This is what we call “local
            SEO.” Ground-rule these days is that it’s by far the easiest to
            optimize if you have a proper address in a region/city. The thing is
            that if you want to optimize for, for instance, a service area that
            you are not located in physically, your main tool for optimization
            is content. You should simply write a lot about that area. We found
            that often, this leads to forced pages that have little to do with
            the business at hand. It’s clear that these pages are only added for
            SEO reasons.
          </div>
          <div>
            Local SEO explained in detail In our series on local SEO, David Mihm
            mentions a number of things you can do to really optimize your
            website for a certain geographical area: An introduction to ranking
            your local business The importance of Google My Business How to
            optimize your website for local search Why inbound links are so
            important and how to get them Citations for local search The impact
            of reviews for local ranking Social media and local SEO The impact
            of behavioral signals That is a lot to digest, but if you are
            serious about optimizing for your local audience, read all eight
            articles. Local SEO isn’t just about search engines Yes, there is a
            lot you can do online to optimize your website for a local audience.
            But if you are running a local business, things like word-of-mouth
            and a print brochure also contribute to local SEO. If you mention
            your website and social profiles on your offline
            communication/promotion as well, your Facebook likes might go up,
            your Twitter followers could increase, and the direct traffic on
            your website will get higher. One way or another, this will be
            visible to Google as well, beit indirect perhaps. So, back to our
            main question: what is local SEO? Local SEO consists of a number of
            factors that help you address your local audience by better rankings
            in search engines. It’s not just optimizing your address or your
            social media strategy; it’s all these things combined that we call
            local SEO. Good luck optimizing!
            https://yoast.com/ranking-your-local-business-part-1-introduction/
          </div>{" "}
          <div className="black slide-in-left sideLinks">
            <a className="block" href="/en/research/localseo">
              {t("analyticsHP1")}
            </a>
            <a className="block" href="/en/research/analytics">
              {t("analyticsHP2")}
            </a>
            <a className="block" href="/en/research/bestpractices">
              {t("analyticsHP3")}
            </a>
            <a className="block" href="/en/research/sea">
              {t("analyticsHP6")}
            </a>
          </div>
        </div>{" "}
        <LinksToPages />
      </div>
    );
  }
}

export default translate("translations")(LocalSEO);
