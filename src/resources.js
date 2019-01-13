import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "./LinksToPages";
import ContactMain from "./ContactMain";

class Resources extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { t, i18n } = this.props;
    console.log("PROPS" + this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SEO Audit - Search Engine Optimization || SEOBerlino</title>
          <meta
            name="description"
            content="SEO Expertise: Onpage SEO, Offpage SEO, Technical SEO, Analytics and SEO Research."
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/resources"
          />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/audit.jpg"
            title="content, a photo by Jo Szczepanska"
            alt="SEO Audit"
            height="300px"
            width="auto"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lang}> SEO FREELANCER </a>

            <a href={"/" + this.props.lang + "/resources"}> AUDIT </a>
          </div>
          <div className="infoTitle">
            <h1 className="h1services">SEO Audit</h1>
          </div>

          <div>
            <div className="marginright black">
              <div className="black slide-in-left sideLinks">
                <a className="block" href={"/en/onpage"}>
                  ON PAGE
                </a>
                <a className="block" href={"/en/offpage"}>
                  OFFPAGE
                </a>
                <a className="block" href={"/en/technical"}>
                  TECHNICAL SEO
                </a>{" "}
                <a className="block" href={"/en/research"}>
                  RESEARCH & ANALYTICS
                </a>{" "}
                <a className="block" href={"/en/seonews"}>
                  SEONEWS
                </a>{" "}
              </div>
              <p className="italic">{t("auditintro")}</p>
              <br />
              <h2>
                <a href="/en/onpage/keywordresearch">Keyword Research</a> &{" "}
                <a href="/en/onpage">Onpage SEO</a>
              </h2>
              <p>
                {t("auditintro2")}{" "}
                <a href="/en/onpage" className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>
              </p>
              <br />
              <h2>
                <a href="/en/technical">Technical SEO</a>
              </h2>
              <p>
                {t("auditintro3")}{" "}
                <a href="/en/technical" className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>
              </p>
              <br />
              <h2>
                <a href="/en/offpage">Offpage SEO</a>
              </h2>
              <p>
                {t("auditintro4")}{" "}
                <a href="/en/offpage" className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>{" "}
              </p>{" "}
              <br />
              <h2>
                <a href="/en/research">
                  Competitor Analysis, Analytics, SEA and Local SEO
                </a>
              </h2>
              <p>
                {t("auditintro5")}{" "}
                <a href="/en/research" className="block">
                  <img title="more" className="iconsmore" src="/more.svg" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <LinksToPages />
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Resources);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };

// export default connect(getStateFromRedux)(Resources);
