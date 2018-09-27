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

import Blog from "./blog";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    axios.get(`/getarticles/`).then(res => {
      this.setState({
        articles: res.data.rows
      });
    });
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("HPTitle")}</title>
        </Helmet>
        <div className="container">
          <div className="filterDiv">
            <h2 />
          </div>

          <div className="blogArticlesHP">
            <p className="blogHPtext">Blog's latest articles</p>
            <div className="blogWindow">
              {this.state.articles.map(article => (
                <div className="blogItemHP">
                  <img src={article.imageurl} height="70px" width="70px" />

                  <Link to={"/" + this.state.lang + "/blog"}>
                    <p className="listArticlesBlog">{article.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="intro">
            <footer className="txt"> {t("intro1")}</footer>
            <footer className="txt"> {t("intro2")}</footer>
            <footer className="txt"> {t("intro3")}</footer>
            <button className="buttonHP"> Get in touch </button>
          </div>
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
