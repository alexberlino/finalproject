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
import OnpageElement from "./onpageElement";

class Onpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <title>On-page SEO || SEO Berlino</title>
        </Helmet>

        <div className="infoTitle"> On-page SEO Audit </div>

        <div className="infoMain">
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
        </div>

        <OnpageElement />

        <LinksToPages
          pageChange={this.props.pageChange}
          lang={this.props.lng}
        />
      </div>
    );
  }
}

export default translate("translations")(Onpage);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
