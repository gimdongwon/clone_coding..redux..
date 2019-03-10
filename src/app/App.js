import "./App.scss";

import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MyPage from "./components/MyPage";

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Fake_coding</title>
          </Helmet>
          <Header />
          <Switch>
            <Route path="/mypage" component={MyPage} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
