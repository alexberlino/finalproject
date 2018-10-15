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
        <img className="imageHPMob" src="/applemob.png" />

        <div className="hey">
          <span>SEO Freelancer in Berlin</span>
          <span>On-page and</span>
          <span>Keyword Research</span>
          <span>Technical SEO and </span>
          <span>Analytics</span>
          <span>Competitor Analysis</span>
          <span>Off-Page Audit</span>
        </div>

        <div className="intro">
          <img className="portrait" src="/portrait.png" />
          <footer className="txt">Alex Bieth, MBA</footer>

          <footer className="txt"> {t("intro1")}</footer>
          <footer className="txt"> {t("intro2")}</footer>
          <footer className="txt">
            {" "}
            Roadmaps, strategic planning and monitoring
          </footer>
          <footer className="txt"> {t("intro3")}</footer>

          <a href={"/" + this.props.lang + "/contact"}>
            <p
              className="buttonHP"
              onClick={() => this.props.changePage("/contact")}
            >
              {t("getintouch")}
            </p>
          </a>

          <a href={"/" + this.props.lang + "/about"}>
            <p
              className="buttonHP buttonHP2"
              onClick={() => this.props.changePage("/about")}
            >
              More about me
            </p>
          </a>
        </div>

        <div className="intro2">
          <div className="introQuarter">
            <footer className="txt2"> Online Marketing</footer>
            <ul>
              <li className="txt2"> SEO</li>
              <li className="txt2">Analytics </li>
              <li className="txt2">Business Expertise (MBA)</li>
              <li className="txt2"> Market research</li>

              <li className="txt2">Competitor Analysis</li>

              <li className="txt2"> SEA</li>
            </ul>
          </div>
          <div className="introQuarter">
            <footer className="txt2"> {t("intro3")}</footer>
            <ul>
              <li className="txt2"> React, Vue, Handlebars</li>
              <li className="txt2">Javascript, JQuery </li>
              <li className="txt2">Node, Express</li>

              <li className="txt2"> HTML, CSS</li>
              <li className="txt2"> SQL, Postgres</li>
            </ul>
          </div>
        </div>

        <p className="HPTitle HPTitle2">MY BLOG: LATEST POSTS</p>

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

        <div className="homepageNews">
          <a href={"/" + this.props.lang + "/seonews"}>
            <p
              className="HPTitle HPTitle3"
              onClick={() => this.props.pageChange("/seonews")}
            >
              LATEST SEO NEWS
            </p>
          </a>
          <NewsItems />
        </div>
        <div>
          <LinksToPages />
        </div>
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
