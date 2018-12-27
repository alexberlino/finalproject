import React, { Component } from "react";
import ReactDOM from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import i18n from "../i18n";
import { Helmet } from "react-helmet";

class BrandBuilding extends Component {
  render() {
    const { t, i18n } = this.props;
    console.log(this.props.i18n.language);

    return (
      <div className="mainRightServices">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Offpage SEO Freelancer - Brand Building | SEO Berlino</title>
          <meta name="description" content="" />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/offpage/brandbuilding"
          />{" "}
        </Helmet>
        <div className="main2">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> EXPERTISE ></a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <h1 className="h1services">
            {" "}
            Brandbuilding: backlinks and brand visibility
          </h1>
          <div className="serviceTitle"> Why it's Important</div>
          <div className="serviceText">
            Your links represent your reputation and relevancy in your domain.
            Linkbuilding now goes hand in hand with brand building. As you
            increasedthe "digital signs of recognition" aka links, you are also
            building visibility of your brand. The best links are those which
            are where your potential customers are browsing the web or looking
            for companies such as yours. If these backlinks bring you quality
            traffic that means it is indeed in the right place and brings value
            to your online reputation (aka domain / page authority)
          </div>
          <h2 className="serviceTitle"> Plan to get links</h2>
          <div className="serviceText">
            After doing an audit of your link profile and of your main SEO
            competitors, a plan is needed to proactively develop your link
            building profile. This is on one hand a never ending job and on the
            other the new quality links need to be coming in at regular
            intervals.
          </div>
          <h2 className="serviceTitle"> Influencers</h2>
          <div className="serviceText">
            An important part in brand building is searching and finding the
            influencers sources and websites where your potential users visit
            when investigation or potentially deciding on which company to use.
          </div>
          <h2 className="serviceTitle"> Content Creation, but not any</h2>
          <div className="serviceText">
            Looking at what the content your relevant influencers share, you can
            get some inspiration on the content you need to start producing.
            Also you need to identify parralel search terms and topics with
            significant search volume, which are not yet on your Keyword list.
          </div>
          <h2 className="serviceTitle"> more reading</h2>
          <div className="serviceText">
            <a
              onClick={() =>
                this.props.pageChange(
                  "/article/linkbuilding-getting-it-right-in-2018"
                )
              }
              href="/en/article/linkbuilding-getting-it-right-in-2018"
            >
              article on my blog about link building
            </a>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default translate("translations")(BrandBuilding);
