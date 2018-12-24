import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import LinksToPages from "./LinksToPages";
import Crawlability from "./technical/crawlability";
import DynamicRendering from "./technical/dynamicrendering";
import Indexation from "./technical/indexation";
import Internationalisation from "./technical/internationalisation";
import MobileFriendly from "./technical/mobilefriendly";
import PageSpeed from "./technical/pagespeed";
import Security from "./technical/security";
import ContactMain from "./ContactMain";

class Technical extends Component {
  constructor() {
    super();
    this.state = {
      show: "",
      toggle: "hideRightServices",
      hide: null,
      hide2: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }
  handleClick(n) {
    this.setState({
      show: n,
      toggle: "",
      hide: "hide",
      hide2: "hide2"
    });
  }

  handleClickClose() {
    this.setState({
      toggle: "hideRightServices",
      hide: "show",
      hide2: null
    });
    window.scrollTo(0, 0);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;
    console.log(this.props);

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Technical SEO Freelancer || SEO Berlino</title>
          <meta
            name="description"
            content="Technical SEO Freelancer in Berlin: indexation, crawlability, internationalisation, pagespeed, etc "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical"
          />
        </Helmet>
        <div className="main2">
          <div className="breadcrumb2">
            <a href={"/" + this.props.lng}>> HOME ></a>

            <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>

          <div className="infoTitle">
            <h1>Technical SEO Freelancer</h1>
            <img
              alt="technical"
              src="/technical.svg"
              className="logoAnimationServices"
            />
          </div>

          <div className="services">
            <div className={this.state.hide + " leftServices"}>
              <p className="listServices" onClick={() => this.handleClick(1)}>
                {t("technicalHP1")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(2)}>
                {t("technicalHP2")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(3)}>
                {t("technicalHP3")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(4)}>
                {t("technicalHP4")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(5)}>
                {t("technicalHP5")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(6)}>
                {t("technicalHP6")}
              </p>
              <p className="listServices" onClick={() => this.handleClick(7)}>
                {t("technicalHP7")}
              </p>
            </div>

            <div className={this.state.toggle + " rightServices"}>
              {this.state.show == 1 ? <Indexation /> : null}
              {this.state.show == 2 ? <Crawlability /> : null}
              {this.state.show == 3 ? <Internationalisation /> : null}
              {this.state.show == 4 ? <PageSpeed /> : null}
              {this.state.show == 5 ? <MobileFriendly /> : null}
              {this.state.show == 6 ? <DynamicRendering /> : null}
              {this.state.show == 7 ? <Security /> : null}
            </div>
          </div>

          <div className={this.state.hide2}>
            <div className="linkstoPageMainDiv2">
              <ul>
                <li>
                  <a href={"/" + this.props.lng + "/technical/crawlability"}>
                    CRAWLABILITY
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href={"/" + this.props.lng + "/technical/dynamicrendering"}
                  >
                    DYNAMIC RENDERING
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href={
                      "/" + this.props.lng + "/technical/internationalisation"
                    }
                  >
                    INTERNATIONALISATION
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/technical/mobilefriendly"}>
                    MOBILE FRIENDLY
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/technical/pagespeed"}>
                    PAGESPEED
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/technical/security"}>
                    SECURITY
                  </a>
                </li>

                <li>
                  {" "}
                  <a href={"/" + this.props.lng + "/technical/indexation"}>
                    INDEXATION
                  </a>
                </li>
              </ul>
            </div>
            <LinksToPages
              pageChange={this.props.pageChange}
              lang={this.props.lng}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Technical);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
