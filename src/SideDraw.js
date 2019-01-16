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
            <a href={"/" + this.props.lang + "/"}>
              <span onClick={() => this.props.pageChange("/")}>HOME</span>
            </a>
          </li>

          <li>
            <a href={"/en/services"}>
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/resources")
                }
              >
                SERVICES{" "}
              </span>
            </a>
          </li>

          <li>
            <a href={"/en/resources"}>
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/resources")
                }
              >
                SEO AUDIT
              </span>
            </a>
          </li>

          <li>
            <a href={"/en/blog"}>
              <span
                onClick={() =>
                  this.props.pageChange("/blog") ||
                  this.props.languageChange("en")
                }
              >
                BLOG
              </span>
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
