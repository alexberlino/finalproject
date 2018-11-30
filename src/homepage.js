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
                        href="https://www.seoberlino.com/en"
                    />
                    <title>{t("HPTitle")}</title>
                    <meta name="description" content="SEO Expert in Berlin" />
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
                    <footer className="txt2 txthead">
                        {" "}
                        <img alt="about me" src="/me.svg" className="icons" />
                        {t("aboutmetitle") + ">"}
                    </footer>

                    <h1 className="txt">{t("intro1")}</h1>
                    <div className="txt">{t("intro2")}</div>
                    <div className="txt">{t("intro4")}</div>
                    <div className="txt">{t("intro3")}</div>

                    <div className="txt">
                        <Link
                            to={"/" + this.props.i18n.language + "/about"}
                            onClick={() => this.props.pageChange("/about")}
                        >
                            <img
                                alt="more"
                                src="/more.svg"
                                className="iconsmore"
                                title="read more"
                            />
                        </Link>
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
                            <Link
                                to={"/" + this.props.lang + "/cookies"}
                                className="black"
                            >
                                <button className="buttonHP2">Read</button>{" "}
                            </Link>
                        </div>
                    </div>
                ) : null}

                <div className="intro2">
                    <div className="introQuarter">
                        <img
                            alt="monitoring"
                            src="/seo-monitoring.jpg"
                            className="icon"
                        />

                        <p className="txt2 block"> SEO</p>
                        <p className="txt2 block">Analytics </p>
                        <p className="txt2 block">{t("intro5")}</p>

                        <p className="txt2 block"> SEA</p>
                    </div>
                    <div className="introQuarter">
                        <img
                            alt="programming"
                            src="/programming.svg"
                            className="icon"
                        />

                        <p className="txt2 block"> React, Vue, Handlebars</p>
                        <p className="txt2 block">Javascript, JQuery </p>
                        <p className="txt2 block">Node, Express</p>

                        <p className="txt2 block"> HTML, CSS</p>
                        <p className="txt2 block"> SQL, Postgres</p>
                    </div>
                </div>

                <div className="intro3">
                    <section className="green">
                        <h2 className="txt2 txthead  ">
                            {" "}
                            <img
                                alt="on-page SEO"
                                src="/onpage.svg"
                                className="icons"
                            />{" "}
                            onpage_audit>
                        </h2>
                        <div className="txt3">
                            <Link
                                to={"/" + this.props.i18n.language + "/onpage"}
                                onClick={() => this.props.pageChange("/onpage")}
                            >
                                <ul>
                                    <li>{t("onpageHP1")}</li>
                                    <li>{t("onpageHP2")}</li>
                                    <li>{t("onpageHP3")}</li>
                                    <li>{t("onpageHP4")}</li>
                                    <li>{t("onpageHP5")}</li>
                                    <li>{t("onpageHP6")}</li>
                                    <li>{t("onpageHP7")}</li>
                                    <li>{t("onpageHP8")}</li>
                                    <li>{t("onpageHP9")}</li>
                                    <li>{t("onpageHP10")}</li>
                                </ul>
                                <img
                                    alt="more"
                                    src="/more.svg"
                                    className="iconsmore"
                                    title="read more"
                                />{" "}
                            </Link>
                        </div>{" "}
                    </section>

                    <section className="orange">
                        {" "}
                        <h2 className="txt2 txthead ">
                            {" "}
                            <img
                                alt="off-page"
                                src="/offpage.svg"
                                className="icons"
                            />offpage_audit>
                        </h2>
                        <div className="txt3">
                            <Link
                                to={"/" + this.props.i18n.language + "/offpage"}
                                onClick={() =>
                                    this.props.pageChange("/offpage")
                                }
                            >
                                {" "}
                                <ul>
                                    <li>{t("offpageHP1")}</li>
                                    <li>{t("offpageHP2")}</li>
                                    <li>{t("offpageHP3")}</li>
                                    <li>{t("offpageHP4")}</li>
                                    <li>{t("offpageHP5")}</li>
                                </ul>
                                <img
                                    src="/more.svg"
                                    className="iconsmore"
                                    title="read more"
                                    alt="more"
                                />{" "}
                            </Link>
                        </div>
                    </section>

                    <section className="green">
                        {" "}
                        <h2 className="txt2 txthead  ">
                            {" "}
                            <img
                                alt="technical"
                                src="/technical.svg"
                                className="icons"
                            />{" "}
                            technical_seo>
                        </h2>
                        <div className="txt3">
                            <Link
                                to={
                                    "/" +
                                    this.props.i18n.language +
                                    "/technical"
                                }
                                onClick={() =>
                                    this.props.pageChange("/technical")
                                }
                            >
                                <ul>
                                    <li>{t("technicalHP1")}</li>
                                    <li>{t("technicalHP2")}</li>
                                    <li>{t("technicalHP3")}</li>
                                    <li>{t("technicalHP4")}</li>
                                    <li>{t("technicalHP5")}</li>
                                    <li>{t("technicalHP6")}</li>
                                    <li>{t("technicalHP7")}</li>
                                </ul>
                                <img
                                    src="/more.svg"
                                    className="iconsmore"
                                    title="read more"
                                    alt="more"
                                />{" "}
                            </Link>{" "}
                        </div>
                    </section>

                    <section className="orange ">
                        <h2 className="txt2 txthead  ">
                            <img
                                alt="anayltics"
                                src="/analytics.svg"
                                className="icons"
                            />{" "}
                            analytics & research>
                        </h2>

                        <div className="txt3">
                            <Link
                                to={
                                    "/" + this.props.i18n.language + "/research"
                                }
                                onClick={() =>
                                    this.props.pageChange("/research")
                                }
                            >
                                <ul>
                                    <li>{t("analyticsHP1")}</li>
                                    <li>{t("analyticsHP2")}</li>
                                    <li>{t("analyticsHP3")}</li>
                                    <li>{t("analyticsHP4")}</li>
                                    <li>{t("analyticsHP6")}</li>
                                </ul>
                                <img
                                    alt="more"
                                    src="/more.svg"
                                    className="iconsmore"
                                    title="read more"
                                />
                            </Link>{" "}
                        </div>
                    </section>
                </div>

                <div>
                    <div>
                        <h2 className="txt2 txthead"> blog></h2>
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
                                        <a
                                            href={
                                                "/" +
                                                this.props.i18n.language +
                                                "/blog"
                                            }
                                        >
                                            <span
                                                onClick={() =>
                                                    this.props.pageChange(
                                                        "/blog"
                                                    )
                                                }
                                            >
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

                <div>
                    <div>
                        <h2 className="txt2 txthead"> latest seonews></h2>
                        <div className="homepageNews">
                            <NewsItems />
                        </div>
                        <Link
                            to={"/" + this.props.i18n.language + "/seonews"}
                            onClick={() => this.props.pageChange("/seonews")}
                        >
                            <img
                                alt="more"
                                src="/more.svg"
                                className="iconsmore"
                                title="read more"
                            />{" "}
                        </Link>
                    </div>
                </div>
                <div className="contactmob">
                    <h2 className="txt2 txthead"> {t("getintouch")}></h2>
                    <h2 className="txt">
                        <img
                            alt="telephone"
                            src="/telephone.svg"
                            className="iconphone"
                        />015 787 011 932
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
