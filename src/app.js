import React, { Component } from "react";
// import axios from "./axios";
import { Switch } from "react-router";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Homepage from "./homepage";
import Contact from "./contact";
import Services from "./services";
import Blog from "./blog";
import SEONews from "./seonews";
import Impressum from "./impressum";
import Resources from "./resources";
import About from "./about";
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
    console.log("THISSTATEAPP", this.state);
    // this.props.history.push("/" + lng);
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
    console.log("THISSTATE", this.state.lang);

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
                      i18n={this.props.i18n}
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
                  path="/en/article/:url"
                  render={() => <Article lang={lang} page={page} />}
                />
                <Route
                  exact
                  path="/de/article/:url"
                  render={() => <Article lang={lang} page={page} />}
                />
                <Route exact path="/en/about" render={() => <About />} />
                <Route exact path="/de/about" render={() => <About />} />
                <Route
                  exact
                  path="/en/contact"
                  render={() => <Contact i18n={this.props.i18n} />}
                />
                <Route
                  exact
                  path="/de/contact"
                  render={() => <Contact i18n={this.props.i18n} />}
                />
                <Route exact path="/en/offpage" render={() => <Offpage />} />
                <Route exact path="/de/offpage" render={() => <Offpage />} />

                <Route
                  exact
                  f
                  path="/en/offpage/:item"
                  render={() => <Offpage />}
                />
                <Route
                  exact
                  f
                  path="/de/offpage/:item"
                  render={() => <Offpage />}
                />

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
                  path="/de/onpage"
                  lang={lang}
                  page={page}
                  pageChange={this.changePage}
                  render={() => <Onpage />}
                />

                <Route exact path="/en/research" render={() => <Research />} />
                <Route exact path="/de/research" render={() => <Research />} />

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
                  path="/:lang/technical"
                  render={() => <Technical />}
                />

                <Route
                  exact
                  path="/de/blog"
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
                  path="/de/seonews"
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
                  path="/de/resources"
                  render={() => (
                    <Resources
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
