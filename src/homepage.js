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

  static getDerivedStateFromProps(props, state) {
    console.log("DERIVEDPROPS", props);
    console.log("DERIVEDSTATE", state);
    return null;
  }
  componentDidMount() {
    // i18n.changeLanguage(this.props.lang);
    // console.log("LOCPATHNAME", location.pathname.slice(1, 3));
    // console.log("THISPROPSi18N", this.props.i18n.language);
    // if (this.props.i18n.language != location.pathname.slice(1, 3)) {
    //   console.log("THIS.PROPS", this.props);
    //   console.log("location.replace", location.replace);
    //   if (this.props.lang == "en") {
    //     return location.replace(`/en/${this.props.page}`);
    //   } else {
    //     return location.replace(`/de/${this.props.page}`);
    //   }
    // }

    axios.get(`/get3articles/`).then(res => {
      this.setState({
        articles: res.data.rows
      });
    });
  }

  render() {
    const { t, i18n } = this.props;
    console.log("i18nprops", this.props.i18n.language);
    console.log("location", location.pathname.slice(1, 3));
    console.log("thisstatelang", this.props.lang);
    console.log("thisproppage", this.props.page);

    return (
      <div className="mainHP">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("HPTitle")}</title>
        </Helmet>
        <img className="imageHP" src="/apple.jpg" />
        <h2 />
        <img className="animationHP2" src="/circlecolor.gif" />

        <div className="animationHP" />

        <div className="blogArticlesHP">
          <p className="blogHPtext">{t("bloglatest")}</p>

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
