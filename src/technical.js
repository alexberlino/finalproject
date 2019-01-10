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
          <title>
            Technical SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Technical SEO Freelancer in Berlin: indexation, crawlability, internationalisation, pagespeed, etc "
          />
          <link
            rel="canonical"
            href="https://www.seoberlino.com/en/technical"
          />
        </Helmet>
        <div className="services">
          <img
            src="/auditmainpic/technical.jpg"
            title="technical, a photo by Markus Spiske"
            alt="Technical SEO"
            height="450px"
            className="imageAudit"
          />
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}>> SEO FREELANCER ></a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT ></a>

            <a href={"/" + this.props.lng + "/technical"}> TECHNICAL </a>
          </div>

          <div className="infoTitle">
            <h1 className="h1services">Technical SEO </h1>
          </div>
          <div>
            <div className="marginright">
              <div className="black slide-in-left sideLinks">
                <a className="block" href="/en/technical/indexation">
                  {t("technicalHP1")}
                </a>
                <a className="block" href="/en/technical/crawlability">
                  {t("technicalHP2")}
                </a>
                <a className="block" href="/en/technical/internationalisation">
                  {t("technicalHP3")}
                </a>{" "}
                <a className="block" href="/en/technical/pagespeed">
                  {t("technicalHP4")}
                </a>
                <a className="block" href="/en/technical/mobilefriendly">
                  {t("technicalHP5")}
                </a>
                <a className="block" href="/en/technical/dynamicrendering">
                  {t("technicalHP6")}
                </a>
                <a className="block" href="/en/technical/security">
                  {t("technicalHP7")}
                </a>
              </div>

              <h2>What is technical SEO?</h2>
              <p>
                Technical SEO refers to website and server optimizations that
                help search engine spiders crawl and index your site more
                effectively (to help improve organic rankings).
              </p>
              <p>
                Technical SEO Checklist Search engines give preferential
                treatment in search results to websites that display certain
                technical characteristics — for example a secure connection, a
                responsive design or a fast loading time — and technical SEO is
                the work you need to do to ensure your website does so. Below
                you’ll find a checklist of important steps you can take to
                ensure your technical SEO is up to scratch. By following these
                guidelines, you can help to ensure that the security and
                structure of your site meets the expectation of search engine
                algorithms, and is rewarded in search results accordingly.
                <p>
                  1. Use SSL. Secure Sockets Layer – SSL – is a security
                  technology which creates an encrypted link between a web
                  server and a browser. You can spot a site using SSL fairly
                  easily: the website URL starts with ‘https://’ rather than
                  ‘http://.’ In 2014 Google announced that they wanted to see
                  ‘HTTPS everywhere’, and that secure HTTPS websites were going
                  to be given preference over non-secure ones in search results.
                  = So it makes sense, where possible, to ensure your site is
                  secure – this can be done by installing an SSL certificate on
                  your website.
                </p>
                <p>
                  {" "}
                  2. Ensure your site is mobile-friendly. A ‘responsive’ website
                  design adjusts itself automatically so that it can be
                  navigated and read easily on any device. Google is clear about
                  the fact that having a responsive site is considered a very
                  significant ranking signal by its algorithms. And, with the
                  introduction of Google’s ‘mobile first’ approach to indexing
                  content, a responsive website is now more important than ever.
                  So it makes sense to ensure that your website is fully
                  responsive and will display in the best format possible for
                  mobile, tablet or desktop users.
                </p>
                <p>
                  {" "}
                  3. Speed your site up. Search engines prefer sites that load
                  quickly: page speed is considered an important ranking signal.
                  There are several ways you can speed up your site: Use fast
                  hosting. Use a fast DNS (‘domain name system’) provider
                  Minimise ‘HTTP requests’ - keep the use of scripts and plugins
                  to a minimum Use one CSS stylesheet (the code which is used to
                  tell a website browser how to display your website) instead of
                  multiple CSS stylesheets or inline CSS Ensure your image files
                  are as small as possible (without being too pixelated)
                  Compress your web pages (this can be done using a tool called
                  GZIP) Minify your site’s code - rid of any unnecessary spaces,
                  line breaks or indentation in your HTML, CSS and Javascript
                  (see Google’s Minify Resources page for help with this).
                </p>
                <p>
                  4. Fix duplicate content issues. Duplicate content can either
                  be confusing for users (and indeed search engine algorithms);
                  it can also be used to try to manipulate search rankings or
                  win more traffic. As a result, search engines aren’t keen on
                  it, and Google and Bing advise webmasters to fix any duplicate
                  content issues they find. You can fix duplicate content issues
                  by: Preventing your CMS publishing multiple versions of a page
                  or post (for example, by disabling Session IDs where they are
                  not vital to the functionality of your website and getting rid
                  of printer-friendly versions of your content). Using the
                  canonical link element to let search engines know where the
                  ‘main’ version of your content resides.
                </p>{" "}
                <p>
                  {" "}
                  5. Create an XML sitemap. An XML sitemap is a file that helps
                  search engines to understand your website whilst crawling it –
                  you can think of it as being like a ‘search roadmap’ of sorts,
                  telling search engines exactly where each page is. It also
                  contains useful information about each page on your site,
                  including when a page was last modified; what priority it has
                  on your site; how frequently it is updated. In BigCommerce,
                  your XML site is created automatically; if you are using
                  another platform you may need to use a sitemap generator to
                  build one.
                </p>
                <p>
                  {" "}
                  6. Consider enabling AMP. AMP is a Google-backed project which
                  aims to speed up the delivery of content on mobile devices
                  through the use of special code known as AMP HTML. AMP
                  versions of your web pages load extremely quickly on mobile
                  devices. They do this by stripping your content and code down
                  to the bare bones, leaving text, images and video intact but
                  disabling scripts, comments and forms. Because they load so
                  fast, AMP versions of pages are far more likely to be read and
                  shared by your users, increasing dwell time and the number of
                  backlinks pointing to your content – all good things from an
                  SEO point of view. On top of that, Google sometimes highlights
                  AMP pages in prominent carousels in search results – giving
                  you an important search bump.
                </p>
                <p>
                  {" "}
                  7. Add structured data markup to your website. Structured data
                  markup is code which you add to your website to help search
                  engines better understand the content on it. This data can
                  help search engines index your site more effectively and
                  provide more relevant results. Structured Data Additionally,
                  structured data enhances search results through the addition
                  of ‘rich snippets’ - for example, you can use structured data
                  to add star ratings to reviews; prices to products; or
                  reviewer information(example below). Because they are more
                  visually appealing and highlight immediately useful
                  information to searchers, these enhanced results can improve
                  your click-through rate (CTR), and generate additional traffic
                  to your site. Because sites with results featuring higher CTRs
                  are generally considered to receive preferential treatment in
                  search engines, it is worth making the effort to add
                  structured data to your site.
                </p>
                <p>
                  {" "}
                  8. Register your site with Google Search Console and Bing
                  Webmaster Tools. Google Search Console and Bing Webmaster
                  Tools are free tools from Google and Microsoft respectively
                  that allow you to submit your website to their search engines
                  for indexing. When you are ready to launch your website, you
                  should submit its XML sitemap (see above) to both Google
                  Search Console and Webmaster Tools so that they can crawl your
                  new site and start to display results from it in search
                  results. These services also allow you to keep an eye on the
                  general performance of your site from a search engine
                  prospective - other things you can do with the tools include:
                  testing your site’s mobile usability accessing search
                  analytics viewing backlinks to your site disavowing spammy
                  links and much more besides. Technical SEO Resources You may
                  find the below resources helpful for learning more about
                  technical SEO{" "}
                </p>
              </p>
            </div>{" "}
          </div>
        </div>
        <div>
          <LinksToPages />
        </div>{" "}
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
