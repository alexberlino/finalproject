import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import axios from "./axios";
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
    console.log(this.state.lang);
    console.log(this.state.lng);

    return (
      <div className="mainHP">
        <Helmet>
          <meta charSet="utf-8" />
          <link
            rel="canonical"
            href={"https://www.seoberlino.com/" + this.props.lng}
          />
          <title>{t("HPTitle")}</title>
          <meta name="description" content={t("descriptionHP")} />
        </Helmet>

        <img
          src="/berlin.jpg"
          width="100%"
          height="40%"
          className="berlin"
          alt="Photo of Berlin, SEO Berlino, SEO consultant in Berlin"
          title="Berlin landscape, a photo by Stefan Widua"
        />

        <div className="hey">
          <span> </span>
          <span>{t("hey1")}</span>
          <span>{t("hey2")}</span>
          <span>{t("hey3")} </span>
          <span>{t("hey4")}</span>
          <span>{t("hey5")}</span>
          <span>{t("hey6")}</span>
          <span>{t("hey7")}</span>
          <span>{t("hey8")}</span>
        </div>

        <div className="othercontentHP">
          <div className="txthead introHP">
            {t("aboutmetitle") + ">"} <h1>{t("intro1")}</h1>
          </div>
          <div className="intro">
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

                <p className="txt2"> Search Engine Advertising (Google Ads)</p>
              </div>
              <div className="introQuarter">
                <img
                  alt="programming"
                  src="/programming.svg"
                  className="icon"
                />

                <p className="txt2"> React, Vue, Handlebars</p>
                <p className="txt2">Javascript, JQuery </p>
                <p className="txt2">Node, Express</p>

                <p className="txt2"> HTML, CSS</p>
                <p className="txt2"> SQL, Postgres</p>
              </div>

              <div className="introQuarter">
                <img alt="programming" src="/me.svg" className="icon" />

                <p className="txt2">{t("intro6")}</p>
                <p className="txt2">{t("intro7")} </p>
                <p className="txt2">{t("intro8")} </p>
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
              <div className="block">{t("cookie1")} </div>
              <div className="block">{t("cookie2")} </div>
              <div className="block"> {t("cookie3")} </div>
              <div className="block">
                <button
                  onClick={() => this.clickHandlerClose()}
                  className="buttonHP2"
                >
                  {t("cookie4")}
                </button>
                <Link to={"/" + this.props.lang + "/cookies"} className="black">
                  <button className="buttonHP2">{t("cookie5")} </button>{" "}
                </Link>
              </div>
            </div>
          ) : null}

          <div>
            <h2 className="txthead"> {t("servicesL")}></h2>
            <div className="intro21 ">
              {" "}
              <div className="serviceQuarter black">
                <h2 className="center">
                  <a href="/en/resources">SEO AUDIT</a>
                </h2>
                <p className="txt2">{t("intro9")}</p>
                <p className="txt2">{t("hey4")}</p>
                <p className="txt2">{t("hey3")}</p>
                <p className="txt2">{t("hey5")} </p>
                <p className="txt2">{t("hey8")} </p>

                <p className="txt2"> {t("hey7")}</p>
              </div>
              <div className="serviceQuarter">
                <h2 className="center black">
                  <a href="/en/research/analytics">ANALYTICS </a>
                </h2>
                <p className="txt2">{t("analytics1")}</p>

                <p className="txt2">{t("analytics2")}</p>
                <p className="txt2">{t("analytics3")}</p>
                <p className="txt2">{t("analytics4")}</p>

                <p className="txt2">{t("analytics5")}</p>
              </div>
              <div className="serviceQuarter">
                <h2 className="center black">
                  {" "}
                  <a className="black" href="/en/offpage/brandbuilding">
                    BRAND BUILDING
                  </a>
                </h2>
                <p className="txt2">{t("brandbuilding1")}</p>
                <p className="txt2">{t("brandbuilding2")}</p>
                <p className="txt2">{t("brandbuilding3")}</p>
              </div>
            </div>

            <h3 className="boost float2">{t("boost1")}</h3>
            <h3 className="boost">{t("boost2")}</h3>

            <img
              className="trafficImg"
              src="/traffic.jpg"
              height="80%"
              width="75%"
            />
          </div>

          <div className="seotxt">
            <div className="intro1">
              <h2 className="traffic"> {t("beratung")}</h2>
              <p className="txt3">{t("beratungText")}</p>

              <img
                className="PDCD"
                heigth="350px"
                width="350px"
                src="/PDCA.png"
              />
              <h2 className="traffic black">
                {" "}
                <a href="/en/resources">{t("audit")}</a>
              </h2>
              <p className="txt3">{t("auditText")}</p>
              <h2 className="traffic black">
                <a className="black" href="/en/onpage/keywordresearch">
                  {t("KWResearch")}
                </a>
              </h2>
              <p className="txt3">{t("KWResearchText")}</p>

              <img
                className="PDCD"
                heigth="350px"
                width="350px"
                src="/seoprocess.png"
              />
              <h2 className="traffic black">
                <a className="black" href="/en/onpage">
                  {t("OnPageOptimization")}
                </a>
              </h2>
              <p className="txt3">{t("OnPageOptimizationText")}</p>
              <h2 className="traffic black">
                <a className="black" href="/en/offpage">
                  {t("OffpagePageOptimization")}
                </a>
              </h2>
              <p className="txt3">{t("OffpagePageOptimizationText")}</p>

              <h3 className="black">
                <a className="black" href="/en/offpage/backlinkanalysis">
                  Backlink profile audit
                </a>{" "}
              </h3>
              <p className="txt3">{t("offpage_main")}</p>
            </div>
          </div>

          <div>
            <div>
              <h2 className="txthead"> {t("blog")}></h2>
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
                      <a href={"/en/blog"}>
                        <span onClick={() => this.props.pageChange("/blog")}>
                          {article.title}
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to={"en/blog"}
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
          <div />

          <div className="contactmob">
            <h2 className="txthead"> {t("getintouch")}></h2>
            <h2 className="txt">
              <img alt="telephone" src="/telephone.svg" className="iconphone" />
              015 787 011 932
            </h2>
            <h2 className="txt">seoberlino@gmail.com</h2>

            <ContactMain />
          </div>
          <div className="intro3 ">
            <div>
              <h2 className="footerlink inline"> {t("clients")}></h2>
            </div>

            <div className="logoQuarter">
              <img
                className="logo logomustbe"
                height="110px"
                width="160px"
                alt="must-be logo"
                src="/mustbe.png"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo logospreadshirt"
                height="100px"
                width="65px"
                alt="spreadshirt logo"
                src="/spreadshirt.png"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo logomadeforrain"
                height="120px"
                width="160px"
                src="/madeforrain.png"
                alt="made for rain logo"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo logoholberton"
                height="100px"
                width="190px"
                src="/holberton.png"
                alt="holberton school logo"
              />
            </div>
            <div className=" logoQuarter">
              <img
                className="logo logoteezily"
                height="110px"
                width="100px"
                src="/teezily.png"
                alt="teezily logo"
              />
            </div>
          </div>

          <div className="coverHP" />
          <LinksToPages />
        </div>
      </div>
    );
  }
}

export default translate("translations")(Homepage);
