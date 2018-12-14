import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class Images extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);
    if (window.innerWidth < 1500) {
      window.scrollTo(0, 0);
    }

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Images Optimization SEO Berlino</title>
          <meta type="description" content="" />
          <link rel="canonical" />
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
        </div>

        <h2 className="h1services"> Images Optimization </h2>
        <div className="serviceTitle"> Why it's Important</div>
        <div className="serviceText">
          Image Search still represents for most industry an important SEO
          subchannel. Given how Image search now works, many Image "visits" are
          only virtual and therefore invisible in analytics reports. Image
          Search is still a fantastic opportunity to improve brand awareness.
        </div>
        <img src="/picture.svg" height="200px" className="serviceImage" />

        <div className="serviceTitle"> To do</div>
        <div className="serviceText">
          Make sure images are well optimized from image hosting to image alt
          tags. In case, your website actively uses images, help you with a
          strategy to improve brand awareness.
        </div>
      </div>
    );
  }
}
export default translate("translations")(Images);
