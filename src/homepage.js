import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import axios from "./axios";
import NewsItems from "./NewsItems";
import LinksToPages from "./LinksToPages";
import ContactMain from "./ContactMain";

import Blog from "./blog";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("DERIVEDPROPS", props);
    console.log("DERIVEDSTATE", state);
    return null;
  }
  componentDidMount() {
    axios.get(`/get3articles/`).then(res => {
      this.setState({
        articles: res.data.rows
      });
    });
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="mainHP">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("HPTitle")}</title>
        </Helmet>
        <img className="imageHP" src="/apple2.jpg" />

        <div className="hey">
          <span>SEO Freelancer </span>
          <span>in Berlin </span>
          <span>On-page Audit </span>
          <span>Keyword Research</span>
          <span>Technical SEO </span>
          <span>Analytics</span>
          <span>Competitor Analysis</span>
          <span>Off-Page Audit</span>
        </div>

        <div className="intro">
          <footer className="txt2 txthead">
            {" "}
            <img src="/me.svg" className="icons" />
            {t("aboutmetitle") + ">"}
          </footer>

          <h1 className="txt">{t("intro1")}</h1>
          <div className="txt">{t("intro2")}</div>
          <div className="txt">{t("intro4")}</div>
          <div className="txt">{t("intro3")}</div>

          <div className="txt">
            <Link
              to={this.props.lang + "/about"}
              onClick={() => this.props.pageChange("/about")}
            >
              <img src="/more.svg" className="iconsmore" title="read more" />
            </Link>
          </div>
        </div>

        <div className="intro2">
          <div className="introQuarter">
            <ul>
              <img src="/seo-monitoring.jpg" className="icon" />

              <li className="txt2"> SEO</li>
              <li className="txt2">Analytics </li>
              <li className="txt2">{t("intro5")}</li>

              <li className="txt2"> SEA</li>
            </ul>
          </div>
          <div className="introQuarter">
            <ul>
              <img src="/programming.svg" className="icon" />

              <li className="txt2"> React, Vue, Handlebars</li>
              <li className="txt2">Javascript, JQuery </li>
              <li className="txt2">Node, Express</li>

              <li className="txt2"> HTML, CSS</li>
              <li className="txt2"> SQL, Postgres</li>
            </ul>
          </div>
        </div>

        <div className="intro3">
          <section className="green">
            <h2 className="txt2 txthead  ">
              {" "}
              <img src="/onpage.svg" className="icons" /> onpage_audit>
            </h2>
            <div className="txt3">
              <li> keyword research</li>
              <li> landing page optimization</li>
              <li>internal linking and site architecture,</li>
              <li>metas and tags,</li>
              <li>related tags and breadcrumb</li>
              <li>content and semantics</li>
              <li>image analylis,</li>
              <li>structured data,</li>
              <li>duplicate content and canonicalization,</li>

              <li>voice search</li>
              <Link
                to={this.props.lang + "/onpage"}
                onClick={() => this.props.pageChange("/onpage")}
              >
                <img src="/more.svg" className="iconsmore" title="read more" />{" "}
              </Link>
            </div>{" "}
          </section>

          <section className="orange">
            {" "}
            <h2 className="txt2 txthead ">
              {" "}
              <img src="/offpage.svg" className="icons" />offpage_audit>
            </h2>
            <div className="txt3">
              <li>backlink competitor analysis,</li>
              <li>backlink profile,</li>
              <li>brandbuilding opportunities,</li>
              <li>relevant influencers research,</li>
              <li>toxic links cleaning</li>
              <Link
                to={this.props.lang + "/offpage"}
                onClick={() => this.props.pageChange("/offpage")}
              >
                <img src="/more.svg" className="iconsmore" title="read more" />{" "}
              </Link>
            </div>
          </section>

          <section className="green">
            {" "}
            <h2 className="txt2 txthead  ">
              {" "}
              <img src="/technical.svg" className="icons" /> technical_seo>
            </h2>
            <div className="txt3">
              {" "}
              <li>indexation, redirects and urls</li>
              <li>crawlibility, robots.txt, sitemaps</li>
              <li>internationalisation,</li>
              <li>pagespeed,</li>
              <li>mobile-friendliness,</li>
              <li>React and SEO: dynamic rendering</li>
              <li>security issues and site migration</li>
              <Link
                to={this.props.lang + "/technical"}
                onClick={() => this.props.pageChange("/technical")}
              >
                <img src="/more.svg" className="iconsmore" title="read more" />{" "}
              </Link>{" "}
            </div>
          </section>

          <section className="orange ">
            <h2 className="txt2 txthead  ">
              <img src="/analytics.svg" className="icons" /> analytics &
              research>
            </h2>

            <div className="txt3">
              <li>local SEO</li>
              <li>analytics and reporting set-up or/and control,</li>
              <li>competitor analysis,</li>
              <li>new website, SEO best practices</li>
              <li>ad-hoc research</li>
              <li>SEA (Adwords) optimization</li>
              <Link
                to={this.props.lang + "/audit"}
                onClick={() => this.props.pageChange("/audit")}
              >
                <img src="/more.svg" className="iconsmore" title="read more" />{" "}
              </Link>{" "}
            </div>
          </section>
        </div>

        <div>
          <div>
            <h2 className="txt2 txthead2"> blog></h2>
            <ul>
              <div className="blogArticlesHP">
                {this.state.articles.map(article => (
                  <div className="blogItemHP">
                    <div className="imageBlogHP">
                      <img
                        src={article.imageurl}
                        height="70px"
                        width="70px"
                        className="imageBlogHP"
                      />
                    </div>
                    <div className="listArticlesBlogHP">
                      <a href={"/" + this.props.lang + "/blog"}>
                        <span onClick={() => this.props.pageChange("/blog")}>
                          {article.title}
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to={this.props.lang + "/blog"}
                onClick={() => this.props.pageChange("/blog")}
              >
                <img src="/more.svg" className="iconsmore" title="read more" />{" "}
              </Link>{" "}
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h2 className="txt2 txthead2"> latest seonews></h2>
            <ul>
              <div className="homepageNews">
                <a href={"/" + this.props.lang + "/seonews"} />
                <NewsItems />
              </div>
              <Link
                to={this.props.lang + "/seonews"}
                onClick={() => this.props.pageChange("/seonews")}
              >
                <img src="/more.svg" className="iconsmore" title="read more" />{" "}
              </Link>{" "}
            </ul>
          </div>
        </div>
        <div className="contactmob">
          <ContactMain />
        </div>
        <LinksToPages />
      </div> //Main
    );
  }
}

export default translate("translations")(Homepage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
