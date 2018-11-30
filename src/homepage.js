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

                <div className="introQuarter2">
                    <footer className="txt2 txthead">audit content></footer>
                    <span className="block bold">Executive Summary </span>
                    <span className="block bold">Audit Explanation</span>
                    <span className="block bold">1. Keyword Research</span>
                    <span className="block">
                        keyword brainstorm using current traffic/ Paid search /
                        Tools
                    </span>
                    <span className="block">
                        Current Analysis including competitors rankings
                    </span>
                    <span className="block">Suggestions</span>{" "}
                    <span className="block bold">2. On-page Audit</span>
                    <span className="block">
                        content for traffic, looking optimzation of site vs
                        Keyword Strategy
                    </span>
                    <span className="block">
                        internal linking & site structure
                    </span>
                    <span className="block">meta tags and headers</span>
                    <span className="block">images</span>
                    <span className="block">structured data</span>
                    <span className="block">
                        duplicate content and canonicals
                    </span>
                    <span className="block bold">3. Technical SEO</span>
                    <span className="block">indexation</span>
                    <span className="block">crawlability</span>
                    <span className="block">
                        page speed & mobile-friendliness
                    </span>
                    <span className="block bold">
                        4. Off-page: Backlink Profile
                    </span>
                    <span className="block">overview</span>
                    <span className="block">trend</span>
                    <span className="block">best types of links</span>
                    <span className="block">brandbuilding suggestions</span>
                    <span className="block bold">5. Competitor Analysis:</span>
                    <span className="block">backlink & content</span>
                    <span className="block bold">
                        6. Summary Priority To-Do List
                    </span>
                    <span className="block">low hanging fruit</span>
                    <span className="block">projects</span>
                    <p className="block italic introQuarter ">
                        documents and access needed before audit: Search Console
                        & Google Analytics, Business Overview, Industry Market
                        research including competition, geographical & personas
                        targets, Google Ads data
                    </p>
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
