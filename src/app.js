import React, { Component } from "react";
import { Switch } from "react-router";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Homepage from "./homepage";
import Contact from "./contact";
import Blog from "./blog";
import SEONews from "./seonews";
import Impressum from "./impressum";
import Resources from "./resources";
import SeoLexicon from "./SEOlexicon";
import Admin from "./admin";
import SideDrawer from "./Sidedraw";
import Technical from "./technical";
import Onpage from "./onpage";
import Offpage from "./offpage";
import Research from "./research";
import EditArticle from "./blogedit";
import Navigation from "./nav";
import Footer from "./footer";
import i18n from "./i18n";
import WriteArticles from "./blogwrite";
import LoginAdmin from "./adminlogin";
import Article from "./article.js";
import Backdrop from "./Backdrop";
import About2 from "./about2";
import Cookies from "./cookiepolicy";
import BrandBuilding from "./Offpage/BrandBuilding";
import BacklinkAnalysis from "./Offpage/BacklinkAnalysis";
import Toxic from "./Offpage/Toxic";
import Content from "./Onpage/Content";
import DuplicateContent from "./Onpage/DuplicateContent";
import Images from "./Onpage/Images";
import Services from "./services";
import InternalLinking from "./Onpage/InternalLinking";
import KeywordResearch from "./Onpage/KeywordResearch";
import LandingPageOptimization from "./Onpage/LandingPageOptimization";
import Metas from "./Onpage/Metas";
import StructuredData from "./Onpage/StructuredData";
import VoiceSearch from "./Onpage/VoiceSearch";
import Analytics from "./research/analytics";
import BestPractices from "./research/bestpractices";
import LocalSEO from "./research/localseo";
import SEA from "./research/sea";
import Crawlability from "./technical/crawlability";
import DynamicRendering from "./technical/dynamicrendering";
import Indexation from "./technical/indexation";
import Internationalisation from "./technical/internationalisation";
import MobileFriendly from "./technical/mobilefriendly";
import PageSpeed from "./technical/pagespeed";
import Security from "./technical/security";

// import SearchBox from "./searchbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      lang: i18n.language,
      page: location.pathname.slice(3)
    };

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState({
      sideDrawerOpen: !this.state.sideDrawerOpen
    });
  }
  changeLanguage(lng) {
    i18n.changeLanguage(lng);

    this.setState({
      lang: lng
    });
  }

  changePage(url) {
    this.setState({
      page: url
    });
  }

  backdropClickHandler() {
    this.setState({
      sideDrawerOpen: false
    });
  }

  componentDidMount() {
    this.setState(
      {
        lang: location.pathname.slice(1, 3)
      },
      () => i18n.changeLanguage(this.state.lang)
    );
  }

  render() {
    const { lang, page } = this.state;

    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = (
        <SideDrawer
          languageChange={this.changeLanguage}
          pageChange={this.changePage}
          lang={lang}
          page={page}
        />
      );
      backdrop = <Backdrop click2={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <div>
            {sideDrawer}
            <Navigation
              drawerClickHandler={this.drawerToggleClickHandler}
              languageChange={this.changeLanguage}
              pageChange={this.changePage}
              lang={lang}
              page={page}
            />

            {backdrop}

            <div>
              <Switch>
                <Route
                  exact
                  path="/en"
                  render={() => (
                    <Homepage
                      pageChange={this.changePage}
                      lang={lang}
                      page={page}
                    />
                  )}
                />
                <Route
                  exact
                  path="/fr"
                  render={() => (
                    <Homepage
                      pageChange={this.changePage}
                      lang={lang}
                      page={page}
                    />
                  )}
                />

                <Route
                  exact
                  path="/en/services"
                  render={() => (
                    <Services
                      pageChange={this.changePage}
                      lang={lang}
                      page={page}
                    />
                  )}
                />

                <Route
                  exact
                  path="/de"
                  render={() => (
                    <Homepage
                      pageChange={this.changePage}
                      lang={lang}
                      page={page}
                      i18n={this.props.i18n}
                    />
                  )}
                />

                <Route
                  exact
                  path="/:lang/cookies"
                  render={() => <Cookies lang={lang} page={page} />}
                />
                <Route
                  exact
                  path="/:lang/english-german-seo-lexicon"
                  render={() => <SeoLexicon lang={lang} page={page} />}
                />
                <Route
                  exact
                  path="/en/article/:url"
                  render={() => <Article lang={lang} page={page} />}
                />

                <Route
                  exact
                  path="/en/aboutthiswebsite"
                  render={() => <About2 lang={lang} page={page} />}
                />

                <Route
                  exact
                  path="/:lang/contact"
                  render={() => <Contact i18n={this.props.i18n} />}
                />

                <Route exact path="/en/offpage" render={() => <Offpage />} />

                <Route
                  exact
                  path="/en/onpage"
                  lang={lang}
                  page={page}
                  pageChange={this.changePage}
                  render={() => <Onpage />}
                />

                <Route
                  exact
                  path="/en/onpage/content"
                  render={() => <Content />}
                />

                <Route
                  exact
                  path="/en/onpage/duplicatecontent"
                  render={() => <DuplicateContent />}
                />

                <Route
                  exact
                  path="/en/onpage/images"
                  render={() => <Images />}
                />

                <Route
                  exact
                  path="/en/onpage/internallinking"
                  render={() => <InternalLinking />}
                />

                <Route
                  exact
                  path="/en/onpage/keywordresearch"
                  render={() => <KeywordResearch />}
                />

                <Route
                  exact
                  path="/en/onpage/landingpages"
                  render={() => <LandingPageOptimization />}
                />

                <Route exact path="/en/onpage/metas" render={() => <Metas />} />

                <Route
                  exact
                  path="/en/onpage/structureddata"
                  render={() => <StructuredData />}
                />

                <Route
                  exact
                  path="/en/onpage/voicesearch"
                  lang={lang}
                  page={page}
                  pageChange={this.changePage}
                  render={() => <VoiceSearch />}
                />

                <Route exact path="/en/research" render={() => <Research />} />

                <Route
                  exact
                  path="/en/research/analytics"
                  render={() => <Analytics />}
                />
                <Route
                  exact
                  path="/en/research/bestpractices"
                  render={() => <BestPractices />}
                />
                <Route
                  exact
                  path="/en/research/localseo"
                  render={() => <LocalSEO />}
                />
                <Route exact path="/en/research/sea" render={() => <SEA />} />

                <Route
                  exact
                  path="/en/offpage/brandbuilding"
                  render={() => <BrandBuilding />}
                />

                <Route
                  exact
                  path="/en/offpage/toxic"
                  render={() => <Toxic />}
                />

                <Route
                  exact
                  path="/en/offpage/backlinkanalysis"
                  render={() => <BacklinkAnalysis />}
                />

                <Route exact path="/logout" render={() => <Onpage />} />
                <Route
                  exact
                  path="/en/postarticle"
                  render={() => <WriteArticles />}
                />
                <Route exact path="/en/login" render={() => <LoginAdmin />} />
                <Route
                  exact
                  path="/en/editarticle"
                  render={() => <EditArticle />}
                />
                <Route exact path="/en/form" render={() => <Contact />} />
                <Route
                  exact
                  path="/:lang/impressum"
                  render={() => <Impressum />}
                />

                <Route exact path="/en/admin" render={() => <Admin />} />

                <Route
                  exact
                  path="/en/technical"
                  render={() => <Technical />}
                />
                <Route
                  exact
                  path="/en/technical/crawlability"
                  render={() => <Crawlability />}
                />

                <Route
                  exact
                  path="/en/technical/dynamicrendering"
                  render={() => <DynamicRendering />}
                />

                <Route
                  exact
                  path="/en/technical/indexation"
                  render={() => <Indexation />}
                />

                <Route
                  exact
                  path="/en/technical/internationalisation"
                  render={() => <Internationalisation />}
                />
                <Route
                  exact
                  path="/en/technical/mobilefriendly"
                  render={() => <MobileFriendly />}
                />
                <Route
                  exact
                  path="/en/technical/pagespeed"
                  render={() => <PageSpeed />}
                />
                <Route
                  exact
                  path="/en/technical/security"
                  render={() => <Security />}
                />

                <Route
                  exact
                  path="/en/blog"
                  render={() => (
                    <Blog
                      lang={lang}
                      page={page}
                      pageChange={this.changePage}
                    />
                  )}
                />

                <Route
                  exact
                  path="/en/seonews"
                  render={() => (
                    <SEONews
                      lang={lang}
                      page={page}
                      pageChange={this.changePage}
                    />
                  )}
                />

                <Route
                  exact
                  path="/en/resources"
                  render={() => (
                    <Resources
                      pageChange={this.changePage}
                      lang={lang}
                      page={page}
                      i18n={this.props.i18n}
                    />
                  )}
                />

                <Route
                  exact
                  path="/"
                  render={() => (
                    <Homepage
                      lang={lang}
                      page={page}
                      pageChange={this.changePage}
                    />
                  )}
                />

                <Redirect to="/en/" />
              </Switch>
            </div>

            <Footer
              languageChange={this.changeLanguage}
              pageChange={this.changePage}
              lang={lang}
              page={page}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
