import React, { Component } from "react";
import { translate, Trans } from "react-i18next";
import { BrowserRouter, Route, Link } from "react-router-dom";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: this.props.i18n.language,
      page: location.pathname
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changePageState = this.changePageState.bind(this);
  }

  changeLanguage(lng) {
    console.log(lng);
    i18n.changeLanguage(lng);
    console.log(this.state.lang);

    this.setState({
      lang: lng
    });
    console.log(this.state.lang);
    // this.props.history.push("/" + lng);
    console.log("THISPROPS", this.props);
  }

  changePageState(url) {
    this.setState({
      page: url
    });
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <nav className="side-drawer">
        <ul>
          <ul>
            <li>
              <Link to={"/" + this.state.lang + "/about"}>
                <span onClick={() => this.changePageState("/about")}>
                  {t("about")}
                </span>
              </Link>
            </li>

            <li>
              <Link to={"/" + this.state.lang + "/onpage"}>
                <span onClick={() => this.changePageState("/onpage")}>
                  ON-PAGE
                </span>
              </Link>
            </li>
            <li>
              <Link to={"/" + this.state.lang + "/offpage"}>
                <span onClick={() => this.changePageState("/offpage")}>
                  OFF-PAGE
                </span>
              </Link>
            </li>

            <li>
              <Link to={"/" + this.state.lang + "/technical"}>
                <span onClick={() => this.changePageState("/technical")}>
                  {t("technical")}
                </span>
              </Link>
            </li>

            <li>
              <Link to={"/" + this.state.lang + "/audit"}>
                <span onClick={() => this.changePageState("/audit")}>
                  AUDIT
                </span>
              </Link>
            </li>

            <li>
              <Link to={"/" + this.state.lang + "/blog"}>
                <span onClick={() => this.changePageState("/blog")}>BLOG</span>
              </Link>
            </li>

            <li>
              <Link to={"/" + this.state.lang + "/contact"}>
                <span onClick={() => this.changePageState("/contact")}>
                  {t("contact")}
                </span>
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    );
  }
}

export default translate("translations")(SideDrawer);
