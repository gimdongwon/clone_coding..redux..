import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import Header from "./Header";
import MapComponent from "./MapComponent";
import Footer from "./Footer";
import Content_wrap from "./Content_wrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Fake_coding</title>
        </Helmet>
        <Header />
        <div className="mapper">
          <MapComponent />
        </div>
        <Content_wrap />
        <Footer />
      </div>
    );
  }
}

export default App;
