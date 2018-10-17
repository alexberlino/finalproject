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
        <img className="imageHP" src="/apple.png" />
        <img className="imageHPMob" src="/applemobnew.png" />

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
            <img src="/me.svg" className="icons" />>aboutme
          </footer>

          <h1 className="txt">{t("intro1")}</h1>
          <div className="txt">{t("intro2")}</div>
          <div className="txt">Roadmaps, strategic planning and monitoring</div>
          <div className="txt">
            {t("intro3")}{" "}
            <img src="/more.svg" className="iconsmore" title="read more" />
          </div>
        </div>

        <div className="intro2">
          <div className="introQuarter">
            <ul>
              <img src="/seo-monitoring.jpg" className="icon" />

              <li className="txt2"> SEO</li>
              <li className="txt2">Analytics </li>
              <li className="txt2">Business Expertise (MBA)</li>
              <li className="txt2"> Market research & Competitor Analysis</li>

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

        <section className="intro3 grey">
          <h2 className="txt2 txthead">
            {" "}
            <img src="/onpage.svg" className="icons" /> >onpage_audit
          </h2>
          <div className="txt3">
            <p className="introContent">
              Starting with an in-depth Keyword Research, using the most data
              available such as analytics reports, the audit will then cover a
              thorough check of:
            </p>
            <li>internal linking,</li>
            <li>website structure,</li>
            <li>metas and tags,</li>
            <li>content,</li>
            <li>internal linking,</li>
            <li>voice search</li>

            <img src="/more.svg" className="iconsmore" title="read more" />
          </div>{" "}
        </section>

        <section className="intro3 lightgrey">
          {" "}
          <h2 className="txt2 txthead">
            {" "}
            <img src="/offpage.svg" className="icons" />>offpage_audit
          </h2>
          <div className="txt3">
            {" "}
            <p className="introContent">
              Starting with an in-depth Keyword Research, using the most data
              available such as analytics reports, the audit will then cover a
              thorough check of:
            </p>
            <li>internal linking,</li>
            <li>website structure,</li>
            <li>metas and tags,</li>
            <li>content,</li>
            <li>internal linking</li>
            <img src="/more.svg" className="iconsmore" title="read more" />
          </div>
        </section>

        <section className="intro3 grey">
          {" "}
          <h2 className="txt2 txthead ">
            {" "}
            <img src="/technical.svg" className="icons" /> >technical_seo
          </h2>
          <div className="txt3">
            {" "}
            <p className="introContent">
              Starting with an in-depth Keyword Research, using the most data
              available such as analytics reports, the audit will then cover a
              thorough check of:
            </p>
            <li>indexation</li>
            <li>pagespeed,</li>
            <li>mobile-friendliness,</li>
            <li>https</li>
            <img src="/more.svg" className="iconsmore" title="read more" />
          </div>
        </section>

        <section className="intro3 lightgrey">
          <h2 className="txt2 txthead">
            <img src="/analytics.svg" className="icons" /> >analytics & research
          </h2>

          <div className="txt3">
            <p className="introContent">
              Starting with an in-depth Keyword Research, using the most data
              available such as analytics reports, the audit will then cover a
              thorough check of:
            </p>
            <li>internal linking,</li>
            <li>website structure,</li>
            <li>metas and tags,</li>
            <li>content,</li>
            <li>internal linking</li>
            <img src="/more.svg" className="iconsmore" title="read more" />
          </div>
        </section>

        <div>
          <div>
            <h2 className="txt2 txthead"> >blog</h2>
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
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h2 className="txt2 txthead"> >latest seonews</h2>
            <ul>
              <div className="homepageNews">
                <a href={"/" + this.props.lang + "/seonews"} />
                <NewsItems />
              </div>
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
