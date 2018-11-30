import React, { Component } from "react";
import ReactDOM from "react";
import App from "./app";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Impressum from "./impressum";
import i18n from "./i18n";
import { translate, Trans } from "react-i18next";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // lang: this.props.i18n.language,
            // page: location.pathname
        };
    }
    render() {
        return (
            <div className="footer">
                <div className="footerQuarter">
                    <div>
                        <a
                            onClick={() => this.props.languageChange("de")}
                            height="20px"
                            className="footerflags"
                            width="25px"
                            alt="german"
                            title="auf Deutsch"
                            name="change language to German"
                            href={"/de" + this.props.page}
                        >
                            DE{" "}
                        </a>
                        <a
                            name="change language to English"
                            onClick={() => this.props.languageChange("en")}
                            height="20px"
                            title="change language to English"
                            className="footerflags"
                            width="25px"
                            alt="english"
                            href={"/en" + this.props.page}
                        >
                            EN
                        </a>
                    </div>
                </div>
                <div className="footerLinks footerQuarter">
                    <div className="footerlink">
                        All Right Reserved 2018 Alex Bieth{" "}
                    </div>
                    <Link
                        to={"/" + this.props.lang + "/aboutthiswebsite"}
                        className="footerlink"
                    >
                        about this website
                    </Link>
                </div>
                <div className="footerLinks footerQuarter">
                    <Link className="footerlink " to={"/en/login"}>
                        login
                    </Link>
                    <a className="footerlink" href={"/en/admin"}>
                        admin
                    </a>
                    <Link className="footerlink" to={"/en/impressum"}>
                        impressum
                    </Link>
                    <a className="footerlink" href={"/sitemap.xml"}>
                        sitemap
                    </a>
                </div>
                <div className="hideRightServices footerLinks footerQuarter block">
                    <a href={"/" + this.props.lang + "/about"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/about")}
                        >
                            ABOUT
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/onpage"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/onpage")}
                        >
                            ON-PAGE AUDIT
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/offpage"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/offpage")}
                        >
                            OFF-PAGE AUDIT
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/technical"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/technical")}
                        >
                            TECHNICAL
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/research"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/research")}
                        >
                            RESEARCH AND ANALYICS
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/blog"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/blog")}
                        >
                            BLOG
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/contact"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/contact")}
                        >
                            CONTACT
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/seonews"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/seonews")}
                        >
                            SEO NEWS
                        </span>
                    </a>

                    <a href={"/" + this.props.lang + "/resources"}>
                        <span
                            className="block"
                            onClick={() => this.props.pageChange("/resources")}
                        >
                            RESOURCES
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
