import React, { Component } from "react";
import { translate, Trans } from "react-i18next";
import ReactDOM from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import i18n from "./i18n";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t, i18n } = this.props;
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }

    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <a href={"/" + this.props.lang + "/about"}>
              <span onClick={() => this.props.pageChange("/about")}>
                {t("about")}
              </span>
            </a>
          </li>

          <li>
            <a href={"/" + this.props.lang + "/onpage"}>
              <span onClick={() => this.props.pageChange("/onpage")}>
                ON-PAGE AUDIT
              </span>
            </a>
          </li>
          <li>
            <a href={"/" + this.props.lang + "/offpage"}>
              <span onClick={() => this.props.pageChange("/offpage")}>
                OFF-PAGE AUDIT
              </span>
            </a>
          </li>

          <li>
            <a href={"/" + this.props.lang + "/technical"}>
              <span onClick={() => this.props.pageChange("/technical")}>
                {t("technical")}
              </span>
            </a>
          </li>

          <li>
            <a href={"/" + this.props.lang + "/research"}>
              <span onClick={() => this.props.pageChange("/research")}>
                ANALYTICS & RESEARCH
              </span>
            </a>
          </li>

          <li>
            <a href={"/" + this.props.lang + "/seonews"}>
              <span onClick={() => this.props.pageChange("/seonews")}>
                SEO NEWS
              </span>
            </a>
          </li>

          <li>
            <a href={"/" + this.props.lang + "/resources"}>
              <span onClick={() => this.props.pageChange("/resources")}>
                RESOURCES
              </span>
            </a>
          </li>
          <li>
            <a href={"/" + this.props.lang + "/blog"}>
              <span onClick={() => this.props.pageChange("/blog")}>BLOG</span>
            </a>
          </li>
          <li>
            <a href={"/" + this.props.lang + "/contact"}>
              <span onClick={() => this.props.pageChange("/contact")}>
                {t("contact")}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default translate("translations")(SideDrawer);
