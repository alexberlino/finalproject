import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class KeywordResearch extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("onpageHP1")} | SEO Berlino</title>
          <meta
            name="description"
            content="Keyword research is one the most important first steps in SEO.
              If you are not targeting the right ones, your whole strategy is at risk"
          />
          <link
            rel="canonical"
            href={"/" + this.props.lng + "/onpage/keywordresearch"}
          />{" "}
        </Helmet>
        <img
          src="/auditmainpic/keyword.jpg"
          title="keyword search, a photo by Edho Pratama"
          alt="keyword research"
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

          <h1 className="h1services"> {t("onpageHP1")} </h1>
          <div className="serviceText">
            {t("keywordMP1")}

            <p>{t("keywordMP2")}</p>
          </div>
          <h2> {t("keywordMPT3")}</h2>
          <div className="serviceText">{t("keywordMP3")}</div>

          <h2>{t("keywordMPT4")}</h2>
          <div className="serviceText">
            <p>{t("keywordMP4")}</p>
            <p>{t("keywordMP5")}</p>
            <p>{t("keywordMP6")}</p>
          </div>

          <h2>{t("keywordMPT7")}</h2>
          <div className="serviceText">
            <p>
              <a
                className="linkServices"
                href={"/" + this.props.lng + "/onpage/voicesearch"}
              >
                {t("onpageHP10")}
              </a>{" "}
              {t("keywordMP7")}
            </p>
          </div>
          <h2> {t("relevanttools")}</h2>
          <div className="serviceText">
            <a target="blank" className="block" href=" https://adwords.com/">
              Adwords Keyword Planner{" "}
            </a>
            <a
              target="blank"
              className="block"
              href=" https://searchconsole.com/"
            >
              Google's Search Console{" "}
            </a>
            <a target="blank" className="block" href=" https://semrush.com/">
              SEMRush
            </a>
            <a
              target="blank"
              className="block"
              href=" https://googletrends.com/"
            >
              Google Trends
            </a>
            <a target="blank" className="block" href=" https://soovle.com/">
              ahrefs Keywords Explorer
            </a>
            <a target="blank" className="block" href=" https://soovle.com/">
              Soovle
            </a>
            <a target="blank" className="block" href="https://keywordtool.io/">
              keywordtool.io
            </a>
            <a target="blank" className="block" href="https://kwfinder.com/">
              {" "}
              KW Finder{" "}
            </a>
            <a
              target="blank"
              className="block"
              href=" https://moz.com/explorer"
            >
              {" "}
              Moz Keyword Explorer{" "}
            </a>
            <a
              target="blank"
              className="block"
              href="https://www.secockpit.com"
            >
              SECockpit
            </a>
            <a target="blank" className="block" href=" https://kwfinder.com/">
              KWFinder
            </a>
          </div>
          <div className="black slide-in-left sideLinks">
            <a className="block bold">{t("onpageHP1")}</a>
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

export default translate("translations")(KeywordResearch);
