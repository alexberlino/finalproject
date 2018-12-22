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
          <title>Onpage SEO - Image Optimization | SEO Berlino</title>
          <meta
            name="description"
            content="Get your images indexed and ranked with efficient optimization,
            in particular alt attribute, title tag, image size and file name"
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/onpage/images"
          />{" "}
        </Helmet>
        <div className="breadcrumb">
          <a href={"/" + this.props.lng}>> HOME ></a>

          <a href={"/" + this.props.lng + "/resources"}> RESOURCES ></a>

          <a href={"/" + this.props.lng + "/onpage"}> ONPAGE </a>
        </div>

        <h1 className="h1services"> Images Optimization </h1>
        <h2 className="serviceTitle"> Why it's Important</h2>
        <div className="serviceText">
          Image Search still represents for most industry an important SEO
          subchannel. Given how Image search now works, many Image "visits" are
          only virtual and therefore invisible in analytics reports. Image
          Search is still a fantastic opportunity to improve brand awareness.
        </div>
        <img src="/picture.svg" height="200px" className="serviceImage" />

        <div className="serviceText">
          Make sure images are well optimized from image hosting to image alt
          tags. In case, your website actively uses images, help you with a
          strategy to improve brand awareness.
          <h2 className="serviceTitle"> alt attribute</h2>
          The alt attribute often called "alt tag" gives important information
          to the Google bot regarding what the piture is about. If the image
          path is incorrect, the alt (alternative) attribute will show instead.
          <h2 className="serviceTitle"> image title</h2>
          The title appears as tooltip when there is a mouse-over above the
          image. Use it to give more information about the picture. Although not
          as important for SEO as the alt attribute, it should not be neglected.
          Avoid copy and pasting the same text you have as alt attribute.
          <h2 className="serviceTitle"> image size and format</h2>
          If your image is too big, this will affect pagespeed, especially for
          mobile traffic.
        </div>
      </div>
    );
  }
}
export default translate("translations")(Images);
