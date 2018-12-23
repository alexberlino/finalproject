import React, { Component } from "react";
import { translate, Trans } from "react-i18next";
import ReactDOM from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import i18n from "./i18n";

class LinksToPages extends Component {
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
      <div className="linkstoPageMainDiv">
        <ul>
          <li>
            <a href="/en/onpage">
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/onpage")
                }
              >
                ON-PAGE AUDIT
              </span>
            </a>
          </li>
          <li>
            <a href="/en/offpage">
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/offpage")
                }
              >
                OFF-PAGE AUDIT
              </span>
            </a>
          </li>

          <li>
            <a href="/en/technical">
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/technical")
                }
              >
                {t("technical")}
              </span>
            </a>
          </li>

          <li>
            <a href="/en/research">
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/research")
                }
              >
                RESEARCH AND ANALYICS
              </span>
            </a>
          </li>

          <li>
            <a href={"/en/blog"}>
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/blog")
                }
              >
                BLOG
              </span>
            </a>
          </li>

          <li>
            <a href={"/" + this.props.lng + "/contact"}>
              <span onClick={() => this.props.pageChange("/contact")}>
                {t("contact")}
              </span>
            </a>
          </li>
          <li>
            <a href={"/en/seonews"}>
              <span
                onClick={() =>
                  this.props.languageChange("en") ||
                  this.props.pageChange("/seonews")
                }
              >
                SEO NEWS
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
                RESOURCES
              </span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default translate("translations")(LinksToPages);
