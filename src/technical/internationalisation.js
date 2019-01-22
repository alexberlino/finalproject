import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Internationalisation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Internationalisation - Technical SEO Freelancer | SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO: internationalisation and why its important in SEO "
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/technical/internationalisation"}
          />
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng}> {t("services")} </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>
            <img className="iconsmore2" src="/arrow.png" />

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>
          <img
            src="/auditmainpic/international.jpg"
            title="internationalisation, a photo by Joshua Fuller"
            alt="internationalisation"
            width="80%"
            height="450px"
            className="imageAudit"
          />
          <h1 className="h1services">Internationalisation</h1>{" "}
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            There are various options when operating internationally: same root
            domain, different top level domains, subdomains, how to link between
            them, how to simplify the process without negatively affecting your
            SEO.
          </div>
          <div className="serviceTitle"> To do</div>
          <div className="serviceText">
            <p>
              If you are using the same root domain for internationalisation,
              you will be concentrating your backlink efforts to one main
              domain. However the complexity is to be dealt with. For instance
              href lang metas need to be implemented, avoid any duplicate
              content, use canonicals when necessary.
            </p>

            <p>
              If you are using different root domains for internationalisation,
              there are pros and cons compared to same root, effectively easing
              complexity and building a local identity with the possibility to
              optimize server location. However, you will need to make sure to
              link them from your "master" domain, and manage different backlink
              startegies for each domain.
            </p>

            <p>
              An Audit and careful planning will help you set-up an effective
              SEO strategy depending on your requirements and resources. Make
              sure the language meta tags and settings the Search console are
              set-up, evaluate any possible SEO damage if using client-side
              rendering with a mixed url structure.
            </p>
          </div>
          <div className="black slide-in-left sideLinks">
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/indexation"}
            >
              {t("technicalHP1")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/crawlability"}
            >
              {t("technicalHP2")}
            </a>
            <a className="block bold">{t("technicalHP3")}</a>{" "}
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/pagespeed"}
            >
              {t("technicalHP4")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/mobilefriendly"}
            >
              {t("technicalHP5")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/dynamicrendering"}
            >
              {t("technicalHP6")}
            </a>
            <a
              className="block"
              href={"/" + this.props.lng + "/technical/security"}
            >
              {t("technicalHP7")}
            </a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Internationalisation);
