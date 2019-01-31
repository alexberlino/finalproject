import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import Helmet from "react-helmet";
import ContactMain from "./ContactMain";

class Partnership extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className="main">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("sponsorship")}</title>
          <meta
            name="description"
            content="SEO Services Audit Ad-hoc - SEO Consultant in Berlin"
          />
          <link rel="canonical" href={"/" + this.props.lang + "/services"} />
        </Helmet>
        <div className="services2">
          <div className="infoTitle">
            <br />
            <br />
            <h1 className="h1services2">{t("sponsorship")}</h1>
          </div>
          <br />
          <br />
          <div className="intro20">
            <div className="introQuarter">
              <div className="transparent"> </div>
              <br />
              <div className="limited">LIMITED OFFER</div>

              <br />

              <p className="h2hp">{t("partnershipMP")}</p>
            </div>
          </div>
          <br />
        </div>
        <ContactMain />
      </div>
    );
  }
}

export default translate("translations")(Partnership);

// const getStateFromRedux = state => {
//   return {
//     messages: state.messages
//   };
// };
//
// export default connect(getStateFromRedux)(Homepage);
