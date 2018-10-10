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

        <div className="animationHP" />
        <h2 />

        <div className="intro">
          <footer className="txt"> {t("intro1")}</footer>
          <footer className="txt"> {t("intro2")}</footer>
          <footer className="txt"> {t("intro3")}</footer>
          <a href={"/" + this.props.lang + "/contact"}>
            <span
              className="buttonHP"
              onClick={() => this.props.changePage("/contact")}
            >
              {t("getintouch")}
            </span>
          </a>
        </div>

        <div className="blogArticlesHP">
          <a href={"/" + this.props.lang + "/blog"}>
            <p onClick={() => this.props.pageChange("/blog")}>
              MY BLOG: LATEST POSTS
            </p>
          </a>

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
            <p onClick={() => this.props.pageChange("/seonews")}> SEO NEWS</p>
          </a>
          <NewsItems />
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
