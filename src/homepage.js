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
        />
        <div>
          <div className="othercontentHP">
            <div className="txthead introHP">
              <h1 className="h1hp">{t("intro1")}</h1>
              <br /> <br />
              <div className="h2hp">
                {t("boost1")} {t("boost2")} <br />
                {t("boost3")}
              </div>
            </div>
            <a className="servicesHP" href={"/" + this.props.lng + "/services"}>
              <button className="servicesHP">{t("servicesL")}</button>
            </a>
            <a
              className="servicesHP2"
              href={"/" + this.props.lng + "/freeaudit"}
            >
              <button className="servicesHP2">{t("preaudit")}</button>
            </a>
            <a
              className="servicesHP2"
              href={"/" + this.props.lng + "/partnership"}
            >
              <button className="servicesHP2">{t("sponsorship")}</button>
            </a>
            <a className="servicesHP2" href={"/" + this.props.lng + "/contact"}>
              <button className="servicesHP2">{t("about")}</button>
            </a>
            <div>
              <div className="intro21">
                {" "}
                <div className="serviceQuarter">
                  <h2 className="orange2">
                    <a
                      className="center"
                      href={"/" + this.props.lng + "/resources"}
                    >
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
                    <a
                      className="center"
                      href={"/" + this.props.lng + "/research/analytics"}
                    >
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
                    <a
                      className="center"
                      href={"/" + this.props.lng + "/offpage/brandbuilding"}
                    >
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
              <h2 className="transpbg-white orange ">{t("whatis")} </h2>
              <br />
              <h2 className="white">{t("seolong")} </h2>
              <p className="transpbg-white txt3"> {t("whatisSEO")}</p>
            </div>
          </div>
          <div className="othercontentHP">
            <div className="intro4">
              <div className="marginright">
                {" "}
                <h2 className="transpbg-white orange ">{t("boost4")}</h2>{" "}
                {t("boost5")}
              </div>
            </div>
            <h2 className=" orange2">
              {" "}
              <a>{t("beratung")}</a>
            </h2>
            <p className="txt3">{t("beratungText")}</p>
            <h2 className=" orange2">
              <a href={"/" + this.props.lng + "/resources"}>{t("audit")}</a>
            </h2>
            <p className="txt3">
              {t("auditText")}
              <a
                href={"/" + this.props.lng + "/resources"}
                className="block black"
              >
                <img title="more" className="iconsmore" src="/more.svg" />
              </a>
            </p>
            <h2 className=" orange2">
              <a className="" href={"/" + this.props.lng + "/onpage"}>
                {t("OnPageOptimization")}
              </a>
            </h2>
            <p className="txt3">
              {t("OnPageOptimizationText")}{" "}
              <a
                href={"/" + this.props.lng + "/onpage"}
                className="block black"
              >
                <img title="more" className="iconsmore" src="/more.svg" />
              </a>{" "}
            </p>
            <a className="servicesHP2" href={"/" + this.props.lng + "/contact"}>
              <button className="servicesHP2">{t("about")}</button>
            </a>
            <a className="servicesHP" href={"/" + this.props.lng + "/services"}>
              <button className="servicesHP">{t("servicesL")}</button>
            </a>{" "}
            <br />
            <br />
            <div className="backgroundBlack2 sharable">
              <div className="transpbg-white intro4 marginleft">
                {"   "}
                {t("boost6")} <br />
                <h2 className="transpbg-white orange ">{t("boost7")}</h2>{" "}
                {t("boost8")} <br /> <br />
              </div>{" "}
            </div>
            <div className="backgroundBlack ">
              <h2 className=" orange transpbg-white">
                <a className="black" href={"/" + this.props.lng + "/offpage"}>
                  offpage
                  <span className="white"> {t("optimization")} </span>
                </a>
              </h2>
              <p className="txt3 transpbg-white">
                {t("OffpagePageOptimizationText")}
                <a
                  href={"/" + this.props.lng + "/offpage"}
                  className="block black"
                />
              </p>
              <h2 className=" transpbg-white orange">
                <a href={"/" + this.props.lng + "/offpage/backlinkanalysis"}>
                  <span className="white"> backlink profile </span> audit
                </a>{" "}
              </h2>
              <p className="txt3 transpbg-white">{t("offpage_main")} </p>
              <br /> <br />
            </div>
            <div className="othercontentHP">
              <div className="intro4 sharable2 ">
                <span className="marginleft">{t("boost9")}</span> <br />
                <h2 className="transpbg-white orange ">{t("boost10")} </h2>
                {t("boost11")}
              </div>
              <div className="intro41">
                <h2 className="orange2">
                  <a
                    className=" orange transpbg-white"
                    href={"/" + this.props.lng + "/onpage/keywordresearch"}
                  >
                    {t("KWResearch")}
                  </a>
                </h2>
                <p className="txt3">{t("KWResearchText")}</p>
                <a
                  className="servicesHP"
                  href={"/" + this.props.lng + "/services"}
                >
                  <button className="servicesHP">{t("servicesL")}</button>
                </a>
                <a
                  className="servicesHP2"
                  href={"/" + this.props.lng + "/contact"}
                >
                  <button className="servicesHP2">{t("about")}</button>
                </a>
                <br />
                <br />
                <br />
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
                <br />
                <div>
                  <div className="txt3 testimonial">
                    "Alex is an SEO expert who proposes concrete action measures
                    based on a well-founded analysis and independently
                    implements them. This gives me the opportunity to focus on
                    my day-to-day business while still keeping my finger on the
                    pulse of the times with my website. Thank you for the
                    transparent and professional cooperation!"
                    <br />
                    <div className="bold">
                      <span className="inline2">
                        <img
                          height="40px"
                          width="60px"
                          alt="must-be logo"
                          src="/mustbe.png"
                        />{" "}
                      </span>{" "}
                      <span className="inline2">
                        Hendrik Feige - owner at must-be
                      </span>{" "}
                    </div>
                  </div>
                  <br />
                  <div className="txt3 testimonial">
                    "Thank you for report which was exactly what I was hoping
                    for!"
                    <br />
                    <div className="bold">
                      <span className="inline2">
                        <img
                          height="40px"
                          width="45px"
                          src="/teezily.png"
                          alt="teezily logo"
                        />{" "}
                      </span>{" "}
                      <span className="inline2">
                        Charles Dilasser - CEO at Teezily{" "}
                      </span>
                    </div>{" "}
                  </div>
                  <br />
                  <div className="txt3 testimonial">
                    "Fast, reliable & professional. Would definitely recommend."
                    <br />
                    <div className=" bold ">
                      <span className="inline2">
                        <img
                          height="30px"
                          width="60px"
                          src="/independent.png"
                          alt="independent logo"
                        />{" "}
                      </span>{" "}
                      <span className="inline2">
                        Richard Sfez – CEO at The Independent Photographer
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <br />
                  <div className="txt3 testimonial">
                    "Alex always had a superior command of his field of activity
                    and very good knowledge of all processes and aspects of the
                    company. He was always very successful in expanding his
                    professional knowledge on his own initiative. Alex has led
                    several major projects of cleaning up our SEO profiles so as
                    to reflect the best practices preached by Google as well as
                    pioners. He has been strict in following the cleanest and
                    best practices to avoid penalties, but continue growth in
                    Spreadshirt's SEO visibility."
                    <br />
                    <div className="bold">
                      <span className="inline2">
                        <img
                          height="40px"
                          width="35px"
                          alt="spreadshirt logo"
                          src="/spreadshirt.png"
                        />{" "}
                      </span>{" "}
                      <span className="inline2">
                        Hugo Smoter - CCO at Spreadshirt
                      </span>{" "}
                    </div>{" "}
                  </div>
                </div>{" "}
                <ContactMain />
              </div>{" "}
              <div className="blogArticlesHP">
                <h2 className=" orange2"> {t("blog")}</h2>

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
                      <a href={"/" + this.props.lng + "/blog"}>
                        <span onClick={() => this.props.pageChange("/blog")}>
                          {article.title}
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link to={"en/blog"} onClick={() => this.props.pageChange("/blog")} />{" "}
        </div>

        <div className="footer">
          <div className="footerLinks footerHalf">
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/offpage/backlinkanalysis"}
            >
              {t("offpageHP1")} {t("offpageHP2")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/offpage/brandbuilding"}
            >
              {t("offpageHP3")}, {t("offpageHP4")}
            </a>{" "}
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/offpage/toxic"}
            >
              {t("offpageHP5")}
            </a>
          </div>
          <div className="footerLinks footerHalf">
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/research/localseo"}
            >
              {t("analyticsHP1")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/research/analytics"}
            >
              {t("analyticsHP2")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/research/bestpractices"}
            >
              {t("analyticsHP3")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/research/sea"}
            >
              {t("analyticsHP6")}
            </a>
          </div>{" "}
        </div>

        <div className="footer">
          <div className="footerLinks footerHalf">
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/keywordresearch"}
            >
              {t("onpageHP1")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/landingpages"}
            >
              {t("onpageHP2")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/internallinking"}
            >
              {t("onpageHP3")} {t("onpageHP5")}
            </a>{" "}
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/metas"}
            >
              {t("onpageHP4")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/content"}
            >
              {t("onpageHP6")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/images"}
            >
              {t("onpageHP7")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/structureddata"}
            >
              {t("onpageHP8")}
            </a>{" "}
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/duplicatecontent"}
            >
              {t("onpageHP9")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/onpage/voicesearch"}
            >
              {t("onpageHP10")}
            </a>
          </div>

          <div className="footerLinks footerHalf">
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/technical/indexation"}
            >
              {t("technicalHP1")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/technical/crawlability"}
            >
              {t("technicalHP2")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/technical/internationalisation"}
            >
              {t("technicalHP3")}
            </a>{" "}
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/technical/pagespeed"}
            >
              {t("technicalHP4")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/technical/mobilefriendly"}
            >
              {t("technicalHP5")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/technical/dynamicrendering"}
            >
              {t("technicalHP6")}
            </a>
            <a
              className="block footerlink"
              href={"/" + this.props.lng + "/technical/security"}
            >
              {t("technicalHP7")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Homepage);
