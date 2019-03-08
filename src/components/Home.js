import React from "react";

import Content_wrap from "./Content_wrap";
import MapComponent from "./MapComponent";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <MapComponent />
        <Content_wrap />
      </>
    );
  }
}
