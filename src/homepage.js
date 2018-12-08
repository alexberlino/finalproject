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
      articles: [],
      show: ""
    };
    this.clickHandlerClose = this.clickHandlerClose.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  clickHandlerClose() {
    this.setState({
      show: false
    });
    axios.get("/setcookiesession").then(res => {
      if (res.data.success) {
      }
    });
  }
  componentDidMount() {
    axios.get(`/get3articles/`).then(res => {
      this.setState({
        articles: res.data.rows
      });
    });
    axios.get("/checknotice").then(({ data }) => {
      if (!data.success) {
        this.setState({
          show: true
        });
      }
    });
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="mainHP">
        <Helmet>
          <meta charSet="utf-8" />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng}
          />
          <title>{t("HPTitle")}</title>
          <meta
            name="description"
            content="SEO Expert in Berlin: Audit, Onpage, Offpage, Technical SEO, Competitor Analysis, Analytics, Brand Building"
          />
        </Helmet>
        <img alt="freelancer" className="imageHP" src="/apple4.jpg" />

        <div className="hey">
          <span>SEO Expert </span>
          <span>in Berlin </span>
          <span>On-page Audit </span>
          <span>Keyword Research</span>
          <span>Technical SEO </span>
          <span>Analytics</span>
          <span>Competitor Analysis</span>
          <span>Off-Page Audit</span>
        </div>

        <div className="intro">
          <div className="txt2 txthead introHP">
            {t("aboutmetitle") + ">"} <h1>{t("intro1")}</h1>
          </div>
          <div className="intro2">
            <div className="introQuarter">
              <img
                alt="monitoring"
                src="/seo-monitoring.jpg"
                className="icon"
              />

              <p className="txt2"> SEO</p>
              <p className="txt2">Analytics </p>
              <p className="txt2">{t("intro5")}</p>

              <p className="txt2"> SEA</p>
            </div>
            <div className="introQuarter">
              <img alt="programming" src="/programming.svg" className="icon" />

              <p className="txt2"> React, Vue, Handlebars</p>
              <p className="txt2">Javascript, JQuery </p>
              <p className="txt2">Node, Express</p>

              <p className="txt2"> HTML, CSS</p>
              <p className="txt2"> SQL, Postgres</p>
            </div>

            <div className="introQuarter">
              <img alt="programming" src="/me.svg" className="icon" />

              <p className="txt2">5 years as Head of SEO (Spreadshirt)</p>
              <p className="txt2">
                +400% increase in SEO orders (DACH, US, FR)
              </p>
              <p className="txt2">
                Over 1 year experience working as a freelancer
              </p>
            </div>
            <div className="introQuarter">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alex-bieth-berlin/"
              >
                <img
                  alt="LinkedIn Profile"
                  src="/linkedinprof.png"
                  className="linkedin"
                  height="100px"
                  width="140px"
                />{" "}
              </a>
            </div>
          </div>
        </div>
        {this.state.show ? (
          <div className="cookienotice">
            <div className="block">
              This website uses very basic and generic cookies.{" "}
            </div>
            <div className="block">
              You can read about which cookies are used
            </div>
            <div className="block"> or accept to continue. </div>
            <div className="block">
              <button
                onClick={() => this.clickHandlerClose()}
                className="buttonHP2"
              >
                Accept
              </button>
              <Link to={"/" + this.props.lang + "/cookies"} className="black">
                <button className="buttonHP2">Read</button>{" "}
              </Link>
            </div>
          </div>
        ) : null}

        <div>
          <h2 className="txthead"> services></h2>
          <div className="intro21 ">
            {" "}
            <div className="txt2 serviceQuarter">
              <h2>AUDIT</h2>
              Full/Partial Audit with Excecutive Summary:
              <p>keywords research & onpage</p>
              <p> technical & offpage, </p>
              <p> competitor analysis</p>
            </div>
            <div className="txt2 serviceQuarter">
              <h2>ANALYTICS</h2>
              Google Analytics Check & Optimization
              <p>Report Creation</p>
            </div>
            <div className="txt2 serviceQuarter">
              <h2>BRAND-BUILDING</h2>
              Brand-building: provide you with best recommendation for content
              creation
              <p>
                Based on user & influencers interests to boost quality link
                creation quality and brand awareness.
              </p>
            </div>
            <p />
            <p />
          </div>
        </div>

        <div>
          <h2 className="txthead"> current & former clients></h2>
          <div className="intro3 ">
            {" "}
            <div className="logoQuarter">
              <img
                className="logo"
                height="150px"
                width="200px"
                src="/mustbe.png"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo"
                height="150px"
                width="100px"
                src="/spreadshirt.png"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo"
                height="150px"
                width="190px"
                src="/madeforrain.png"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo"
                height="150px"
                width="220px"
                src="/holberton.png"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo"
                height="150px"
                width="150px"
                src="/teezily.png"
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="txthead"> blog></h2>
            <div className="blogArticlesHP">
              {this.state.articles.map(article => (
                <div className="blogItemHP">
                  <div className="imageBlogHP">
                    <img
                      src={article.imageurl}
                      height="70px"
                      width="70px"
                      className="imageBlogHP"
                      alt="blog article"
                    />
                  </div>
                  <div className="listArticlesBlogHP">
                    <a href={"/" + this.props.i18n.language + "/blog"}>
                      <span onClick={() => this.props.pageChange("/blog")}>
                        {article.title}
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={"/" + this.props.i18n.language + "/blog"}
              onClick={() => this.props.pageChange("/blog")}
            >
              <img
                alt="more"
                src="/more.svg"
                className="iconsmore"
                title="read more"
              />{" "}
            </Link>{" "}
          </div>
        </div>

        <div className="contactmob">
          <h2 className="txthead"> {t("getintouch")}></h2>
          <h2 className="txt">
            <img alt="telephone" src="/telephone.svg" className="iconphone" />015
            787 011 932
          </h2>

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
