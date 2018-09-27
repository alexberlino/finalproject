import React, { Component } from "react";
// import axios from "./axios";
import { Switch } from "react-router";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Favicon from "react-favicon";
import Homepage from "./homepage";
import Contact from "./contact";
import Services from "./services";
import Blog from "./blog";
import Impressum from "./impressum";
import Resources from "./resources";
import About from "./about";
import Admin from "./admin";
import Technical from "./technical";
import Onpage from "./onpage";
import Offpage from "./offpage";
import Audit from "./audit";
import EditArticle from "./blogedit";
import Navigation from "./nav";
import Footer from "./footer";
import { translate, Trans } from "react-i18next";
import i18n from "./i18n";
import WriteArticles from "./blogwrite";
import LoginAdmin from "./adminlogin";

// import SearchBox from "./searchbox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Favicon url="https://www.google.de/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj978PB19ndAhXRsqQKHQ3lDy0QjRx6BAgBEAU&url=https%3A%2F%2Fdepositphotos.com%2F65241603%2Fstock-illustration-freelancer-logo-bird-origami-orange.html&psig=AOvVaw2sdkaQwvA01Lr15DqWdGB2&ust=1538086135003192" />
        <BrowserRouter>
          <div>
            <Navigation />

            <div>
              <Switch>
                <Route
                  exact
                  path="/:lang"
                  render={() => <Homepage i18n={this.props.i18n} />}
                />

                <Route
                  exact
                  path="/:lang/contact"
                  render={() => <Contact i18n={this.props.i18n} />}
                />
                <Route
                  exact
                  path="/:lang/offpage"
                  render={() => <Offpage i18n={this.props.i18n} />}
                />

                <Route
                  exact
                  path="/:lang/onpage"
                  render={() => <Onpage i18n={this.props.i18n} />}
                />

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

                <Route
                  exact
                  path="/en/impressum"
                  render={() => <Impressum />}
                />

                <Route
                  exact
                  path="/:lang/audit"
                  render={() => <Audit i18n={this.props.i18n} />}
                />
                <Route exact path="/en/admin" render={() => <Admin />} />

                <Route
                  exact
                  path="/:lang/technical"
                  render={() => <Technical i18n={this.props.i18n} />}
                />

                <Route
                  exact
                  path="/:lang/blog"
                  render={() => <Blog i18n={this.props.i18n} />}
                />

                <Route
                  exact
                  path="/:lang/resources"
                  render={() => <Resources i18n={this.props.i18n} />}
                />

                <Route
                  exact
                  path="/:lang/about"
                  render={() => <About i18n={this.props.i18n} />}
                />

                <Redirect to="/en/" />
              </Switch>
            </div>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
