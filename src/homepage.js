import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import axios from "./axios";
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
    console.log(this.props);

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
          src="/homepage.jpg"
          className="berlin"
          alt="SEO Freelancer SEO Berlino, SEO consultant in Berlin"
          title="a photo by rawpixel"
        />
        <div className="mainHP">
          <div className="othercontentHP">
            <div className="txthead introHP">
              <h1 className="h1hp">{t("intro1")}</h1>
              <br /> <br />
              <div className="h2hp">
                Grow traffic and visibility. Optimized Keyword Targeting, Brand
                Building. SEO Consultancy, Audit.
              </div>
            </div>
            <a className="servicesHP" href="/en/services">
              <button className="servicesHP">Services</button>
            </a>
            <a className="servicesHP2" href="/en/contact">
              <button className="servicesHP2">About</button>
            </a>
            <div className="intro" />
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
                  <Link
                    to={"/" + this.props.lang + "/cookies"}
                    className="black"
                  >
                    <button className="buttonHP2">{t("cookie5")} </button>{" "}
                  </Link>
                </div>
              </div>
            ) : null}
            <div>
              <div className="intro21">
                {" "}
                <div className="serviceQuarter">
                  <h2 className="orange2">
                    <a className="center" href="/en/resources">
                      {" "}
                      seo audit
                    </a>
                  </h2>
                  <p className="txt2">{t("intro9")}</p>
                  <p className="txt2">{t("hey4")}</p>
                  <p className="txt2">{t("hey3")}</p>
                  <p className="txt2">{t("hey5")} </p>
                  <p className="txt2">{t("hey8")} </p>

                  <p className="txt2"> {t("hey7")}</p>
                </div>
                <div className="serviceQuarter">
                  <h2 className="orange2">
                    <a className="center" href="/en/research/analytics">
                      {" "}
                      analytics{" "}
                    </a>
                  </h2>
                  <p className="txt2">{t("analytics1")}</p>

                  <p className="txt2">{t("analytics2")}</p>
                  <p className="txt2">{t("analytics3")}</p>
                  <p className="txt2">{t("analytics4")}</p>

                  <p className="txt2">{t("analytics5")}</p>
                </div>
                <div className="serviceQuarter">
                  <h2 className="orange2">
                    {" "}
                    <a className="center" href="/en/offpage/brandbuilding">
                      {" "}
                      brand building
                    </a>
                  </h2>
                  <p className="txt2">{t("brandbuilding1")}</p>
                  <p className="txt2">{t("brandbuilding2")}</p>
                  <p className="txt2">{t("brandbuilding3")}</p>
                </div>
              </div>
            </div>{" "}
          </div>

          <div className="whatisseo">
            <div className="backgroundBlack xtrapad">
              <h2 className="blackbgwhite orange traffic">what is </h2>
              <h2 className="white">SEO </h2>
              <p className="blackbgwhite txt3"> {t("whatisSEO")}</p>
            </div>
          </div>

          <div className="transparent" />
          <div className="othercontentHP">
            <div className="seotxt">
              <div className="intro1">
                <div className="intro4">
                  <h2 className="blackbgwhite orange traffic">FULL AUDIT</h2> TO
                  EFFICIENTLY PLAN TASKS BY PRIORITY
                </div>
                <h2 className="traffic orange2"> {t("beratung")}</h2>
                <p className="txt3">{t("beratungText")}</p>
                <h2 className="traffic orange2">
                  <a href="/en/resources">{t("audit")}</a>
                </h2>
                <p className="txt3">
                  {t("auditText")}
                  <a href="/en/resources" className="block black">
                    <img title="more" className="iconsmore" src="/more.svg" />
                  </a>
                </p>
                <h2 className="traffic orange2">
                  <a className="" href="/en/onpage">
                    {t("OnPageOptimization")}
                  </a>
                </h2>
                <p className="txt3">
                  {t("OnPageOptimizationText")}{" "}
                  <a href="/en/onpage" className="block black">
                    <img title="more" className="iconsmore" src="/more.svg" />
                  </a>
                  <a className="servicesHP" href="/en/services">
                    <button className="servicesHP">Services</button>
                  </a>
                  <a className="servicesHP2" href="/en/contact">
                    <button className="servicesHP2">About</button>
                  </a>
                </p>

                <div className="backgroundBlack2 sharable">
                  <div className="blackbgwhite intro4 ">
                    CREATE SHARABLE CONTENT THAT <br />
                    <h2 className="blackbgwhite orange traffic">
                      MATTERS -
                    </h2>{" "}
                    AND BUILD BRAND AWARENESS <br /> <br />
                  </div>{" "}
                </div>
                <div className="backgroundBlack ">
                  <h2 className="traffic orange blackbgwhite">
                    <a className="black" href="/en/offpage">
                      off-page
                      <span className="white"> optimization </span>
                    </a>
                  </h2>
                  <p className="txt3 blackbgwhite">
                    {t("OffpagePageOptimizationText")}
                    <a href="/en/offpage" className="block black" />
                  </p>
                  <h2 className="traffic blackbgwhite orange">
                    <a href="/en/offpage/backlinkanalysis">
                      <span className="white"> backlink profile </span> audit
                    </a>{" "}
                  </h2>
                  <p className="txt3 blackbgwhite">{t("offpage_main")} </p>
                  <br /> <br />
                </div>

                <div className="othercontentHP">
                  <div className="intro4 sharable2">
                    OPTIMIZED KEYWORD TARGETING <br />
                    <h2 className="blackbgwhite orange traffic"> TO BOOST </h2>
                    YOUR TRAFFIC
                  </div>

                  <div className="intro41">
                    <h2 className="orange2">
                      <a className="" href="/en/onpage/keywordresearch">
                        {t("KWResearch")}
                      </a>
                    </h2>
                    <p className="txt3">{t("KWResearchText")}</p>

                    <a className="servicesHP" href="/en/services">
                      <button className="servicesHP">Services</button>
                    </a>
                    <a className="servicesHP2" href="/en/contact">
                      <button className="servicesHP2">About</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="transparent"> </div>

            <div className="contactmob">
              <ContactMain />
            </div>

            <div>
              <div>
                <h2 className="traffic orange2"> {t("blog")}</h2>
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
                />{" "}
              </div>
            </div>
            <div />

            <div className="intro3 ">
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
              <div className=" logoQuarter">
                <img
                  className="logo"
                  height="60px"
                  width="130px"
                  src="/independent.png"
                  alt="independent logo"
                />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default translate("translations")(Homepage);
