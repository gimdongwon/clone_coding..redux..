import React from "react";

import ContentWrap from "./ContentWrap";
import MapComponent from "./Containers/MapComponent";

export default class Home extends React.PureComponent {
  render() {
    return (
      <>
        <MapComponent />
        <ContentWrap />
      </>
    );
  }
}
