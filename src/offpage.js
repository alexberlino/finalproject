import React, { Component } from "react";
import ReactDOM from "react";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import { Helmet } from "react-helmet";
import BacklinkAnalysis from "./Offpage/BacklinkAnalysis";
import BrandBuilding from "./Offpage/BrandBuilding";
import Toxic from "./Offpage/Toxic";
import ContactMain from "./ContactMain";

class Offpage extends Component {
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
          <title>
            Off-page SEO Audit | SEO Expert Freelancer || SEO Berlino
          </title>
          <meta
            name="description"
            content="Offpage SEO Jobs: backlink competitor analysis, backlink profile, bradnbuilding opportunities, toxic link cleaning, best practice"
          />
          <link rel="canonical" href="https://www.seoberlino.com/en/offpage" />{" "}
        </Helmet>
        <div className="services">
          <div className="breadcrumb">
            <a href={"/" + this.props.lng}> SEO FREELANCER </a>

            <a href={"/" + this.props.lng + "/resources"}> AUDIT </a>

            <a href={"/" + this.props.lng + "/offpage"}> OFFPAGE </a>
          </div>
          <img
            src="/auditmainpic/offpage.jpg"
            title="links, a photo by Fré Sonneveld"
            alt="Offpage SEO"
            height="450px"
            className="imageAudit"
          />

          <div className="infoTitle">
            <h1 className="h1services">Offpage SEO Audit</h1>
          </div>
          <div>
            <div className="sideLinks black slide-in-left">
              <a className="block" href="/en/offpage/backlinkanalysis">
                {t("offpageHP1")}, {t("offpageHP2")}
              </a>
              <a className="block" href="/en/offpage/brandbuilding">
                {t("offpageHP3")}, {t("offpageHP4")}
              </a>{" "}
              <a className="block" href="/en/offpage/toxic">
                {t("offpageHP5")}
              </a>
            </div>
            <div className="marginright">
              <h2>What is Offpage SEO</h2>

              <p>
                Offpage SEO refers to techniques that can be used to improve the
                position of a website in the search engine results page (SERPs).
                Many associate offpage SEO with link building but it is not only
                that. OffPage SEO has to do with promotion methods for the
                purpose of ranking a website higher in the SERPs.
              </p>
              <p>
                Unlike On- page SEO, Off-page SEO refers to activities you can
                perform outside the boundaries of your website. The most
                important are: Link Building, Social Media Marketing and Social
                bookmarking.
              </p>

              <h2>Why is Off-Page SEO important?</h2>
              <p>
                Search engines have been trying for decades to find a way to
                return the best results to the searcher. To achieve this, they
                take into account the on-site SEO factors (described above),
                some other quality factors and off-page SEO. Off page SEO gives
                them a very good indication on how the World (other websites and
                users) perceive the particular website. A web site that is high
                quality and useful is more likely to have references (links)
                from other websites; it is more likely to have mentions on
                social media (Facebook likes, tweets, Pins, +1’s etc.) and it is
                more likely to be bookmarked and shared among communities of
                like-minded users.
              </p>

              <h2>What are the benefits of ‘off-site SEO’?</h2>
              <p>
                A successful off-site SEO strategy will generate the following
                benefits to website owners: Increase in rankings – The website
                will rank higher in the SERPs and this also means more traffic.
                Increase in PageRank – Page rank is a number between 0 and 10
                which indicates the importance of a website in the eyes of
                Google. It is the system invented by Larry Page and Sergey Brin
                (Google founders) and one of the reasons that Google was so
                successful in showing the most relevant results to the searcher.
                Page rank today is only one out of the 250 factors that Google
                is using to rank websites. More exposure – Higher rankings also
                means greater exposure because when a website ranks in the top
                positions: it gets more links, more visits and more social media
                mentions. It’s like a never ending sequence of events where one
                thing leads to another and then to another etc.
              </p>

              <h2>What is Link Building</h2>
              <p>
                Link building is the most popular and effective off-Page SEO
                method. Basically by building external links to your website,
                you are trying to gather as many ‘votes’ as you can, so that you
                can bypass your competitors and rank higher. For example, if
                someone likes this article and references it from his/her
                website or blog, then this is like telling search engines that
                this page has good information. Over the years webmasters have
                been trying to build links to their websites to get higher
                rankings and they ‘invented’ a number of ways to increase link
                count. The most popular ways were: Blog Directories – something
                like yellow pages but each entry had a link pointing to a
                website. Forum Signatures – Many people were commenting on
                forums for the sole purpose of getting a link back to their
                website (they included the links in their signature). Comment
                link – The same concept as forum signatures where you would
                comment on some other website or blog in order to get a link
                back. Even worse, instead of using your real name you could use
                keywords so instead of writing ‘comment by Alex Chris’, you
                wrote ‘comment by How to lose weight’. Article Directories – By
                publishing your articles in article directories you could get a
                link (or 2) back to your website. Some article directories
                accepted only unique content while other directories accepted
                anything from spin articles to already published articles.
                Shared Content Directories – Websites like hubpages and
                infobarrel allowed you to publish content and in return you
                could add a couple of links pointing to your websites. Link
                exchange schemes – Instead of trying to publish content you
                could get in touch with other webmasters and exchange links. In
                other words, I could link your website from mine and you could
                do the same. In some cases you could even do more complicated
                exchanges by doing a 3-way link: I link to your website from my
                website but you link to my website from a different website.
                Notice that I used the past tense to describe all the above
                methods because not only they do not work today, you should not
                even try them. If you try to ‘trick’ search engines by building
                artificial links, you are more likely to get a penalty rather
                than an increase in rankings (especially when it comes to
                Google).
              </p>

              <h2>What is a good link?</h2>
              <p>
                So, if the above links are not useful, what is a good link?
                First, you should understand that link building it’s not only a
                matter of quantity but it is a matter of quality as well. In
                other words, it no longer matters how many links are pointing to
                your website but it is more important from where these links are
                coming. For example, a link from a normal blog does not have the
                same ‘weight’ as a link from New York Times or a link from Matt
                Cutts blog (former head of Google Quality team) is not the same
                as a link from my blog. The obvious question is, how to you get
                these links? If you ask Google they will tell you that any links
                pointing to your website has to be natural links. Natural links
                are exactly what their name implies. A website owner or blogger
                likes another website or blog and naturally adds a link to
                his/her blog. Does this happen in reality or is it another myth?
                It certainly does but you have to try really hard to get to this
                point. Take for example this blog, there are many incoming links
                because other webmasters find the content interesting and I also
                link to other sites in my articles because I find their content
                interesting and want to inform my readers about it. This is
                natural link building, a link has more value from the reader’s’
                point of view rather than the search engine’s point of view. The
                best way to attract links is to publish link worthy content that
                other people would like to link to. Chapter 12 of the Complete
                SEO Guide describes in a step-by-step approach how to approach
                link building and how to to get high quality links from premium
                websites that can make a real difference in your rankings. If
                natural links are what I have just described above, in which
                category do all other links belong? They belong in the category
                of artificial links and by adopting such techniques you increase
                the risk for getting a manual or algorithmic penalty by Google.
                Is guest blogging a valid way to build links? Guest posting can
                be a valid way to get links back to your website provided that
                you don’t do it just for links and that you don’t overdo it. You
                can read these 2 articles to get a complete picture as to when
                to accept guest posts on your blog and when to guest post on
                other blogs.
              </p>

              <h2>Social Media </h2>
              <p>
                Social media is part of ‘off-site SEO’ and if you think about
                it, it’s also a form of link building. It should be noted that
                almost all of the links you get from social media sites are
                “nofollow” but this does not mean that they do not have any
                value. Social Media mentions are gaining ground as ranking
                factors and proper configuration of social media profiles can
                also boost SEO.
              </p>

              <h2>Social Bookmarking</h2>
              <p>
                Social bookmarking is not as popular as it used to be in the
                past but it is still a good way to get traffic to your website.
                Depending on your niche you can find web sites like reddit.com,
                stumbleupon.com, scoop.it and delicious.com (to name a few) to
                promote your content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Offpage);
