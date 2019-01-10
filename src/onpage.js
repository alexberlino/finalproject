import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import Helmet from "react-helmet";
import LinksToPages from "./LinksToPages";
import KeywordResearch from "./Onpage/KeywordResearch";
import LandingPageOptimization from "./Onpage/LandingPageOptimization";
import InternalLinking from "./Onpage/InternalLinking";
import Content from "./Onpage/Content";
import Images from "./Onpage/Images";
import StructuredData from "./Onpage/StructuredData";
import DuplicateContent from "./Onpage/DuplicateContent";
import VoiceSearch from "./Onpage/VoiceSearch";
import Metas from "./Onpage/Metas";
import ContactMain from "./ContactMain";

class Onpage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            On-page SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Onpage SEO Freelancer: Keyword research, landing pages, internal linking, metas, images and SD"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/onpage" />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/onpage.jpg"
            title="onpage SEO, a photo by Noémi Macavei-Katócz"
            alt="Onpage SEO"
            height="450px"
            width="85%"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Onpage SEO Audit</h1>
          </div>
          <div>
            <div className="marginright">
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

              <p>
                Onpage optimization (AKA on-page SEO) refers to all measures
                that can be taken directly within the website in order to
                improve its position in the search rankings. Examples of this
                include measures to optimize the content or improve the meta
                description and title tags. Conversely, off-page SEO refers to
                links and other signals.
              </p>
              <p>
                Importance of on-page SEO On-page SEO consists of all the
                elements of SEO you can control best. If you own a website, you
                can control the technical issues and the quality of your
                content. We believe on-page issues should all be tackled as
                they’re in your own hands. If you create an awesome website, it
                will definitely start ranking. Focusing on on-page SEO will also
                increase the probability that your off-page SEO strategy will be
                successful. Link building with a crappy site is a very tough
                job. Nobody wants to link to articles that are badly written or
                boring.
              </p>
              <p>
                Essential on-page SEO factors In our view, there are three major
                on-page SEO factors. These three pillars are the ones you should
                focus on: Technical excellence The quality of your code should
                be high. Check if you’re not unintentionally blocking crawlers
                from indexing your website (we still see this happening!).
                WordPress is an SEO-friendly platform and our free Yoast SEO
                plugin takes care of most remaining technical SEO challenges,
                without you even noticing it. So if you’re using WordPress and
                configured Yoast SEO well, you’ll have most technical aspects of
                your on-page SEO covered. Want to dive deeper into the technical
                side of SEO? Read our articles on technical SEO or take the
                Technical SEO 1 training. Awesome content Why do people visit
                your site? Most likely because it contains information they’re
                looking for. Therefore you should write excellent content.
                Search engines like Google read your text. Which site ranks
                highest is for a large part based on the content of a website.
                That content should be about the right keywords, informative,
                and easy to read. Learn all about writing high-quality content
                in our Ultimate Guide to SEO copywriting. Flawless UX The third
                and final pillar is User eXperience. Users need to easily
                understand your website. They should be able to find what they
                want in a heartbeat. They should know where to click and how to
                navigate through your site. And it should be fast! A beautifully
                designed website is nice, but you should definitely make it your
                top priority to create a user-friendly website first! R
              </p>
            </div>{" "}
          </div>
        </div>
        <div>
          <LinksToPages />
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Onpage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
