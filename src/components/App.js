import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MapComponent from "./MapComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="mapper">
          <MapComponent />
        </div>
      </div>
    );
  }
}

export default App;
